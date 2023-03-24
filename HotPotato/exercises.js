import * as mathjs from 'mathjs'; // Used in randomization

// Database for exercises; JSON formatted
// Keys: "exerciseName", "equipment", "parent", "classification", "muscle1", and "muscle2".
const EXERCISE_DATABASE = require('./exercises.json');

// ----------------------------------------------
// Boolean helper methods for exercise object keys 
// ----------------------------------------------

// Returns whether an exercise is accessible with provided equipment accessible
function isAccessible(input_exercise, available_equipment) {
    return (available_equipment.includes(input_exercise.equipment));
}

// Returns whether an exercise has the provided classification
function hasClassifications(input_exercise, class_type) {
    return (class_type.includes(input_exercise.classification));
}

// Returns whether an exercise targets the provided muscle primarily or secondarily
function hasTargetMuscle(input_exercise, muscles) {
    return (muscles.includes(input_exercise.muscle1) || muscle_group.includes(input_exercise.muscle2));
}

// Returns whether or not an exercise is identical; determined solely by the exercise name
function isIdentical(input_exercise, input_exercise2) {
    return (input_exercise.exerciseName === input_exercise2.exerciseName);
}

// Returns whether an exercise is a derivative; ie has the same parent exercise provided
function isDerivative(input_exercise, exercises) {
    return (exercises.includes(input_exercise.parent));
}

// ---------------------------------------------------------------------------------------------
// Filtering methods for JSON exercise collections
//   - Returns database of exercises filtered according to input parameters.
//   - Defaults to using entire database if a pre-filtered selection of options is not provided.
// ---------------------------------------------------------------------------------------------
// Returns the Exercise object with provided name (first found match is returned, assumed no duplicity)
function getExerciseFromName(exercise_name) {
    return EXERCISE_DATABASE.find(exercise => {
        exercise.exerciseName === exercise_name
    });
}

// Preserves only exercises with accessible equipment
function filterByEquipment(available_equipment, current_options = EXERCISE_DATABASE) {
    // Bodyweight exercises are assumed to not be equipment-limited.
    available_equipment.push("Bodyweight");
    return current_options.filter( x => available_equipment.includes(x.equipment));
    // return AccessibleExercises;
}

// Preserves only exercises with provided classification(s)
function filterByClassification(classifications, current_options = EXERCISE_DATABASE) {
    return current_options.filter( x => 
        classifications.includes(x.classification)
    );
}

// Preserves only exercises which target provided muscle group(s) primarily or secondarily
function filterByMuscleGroup(target_muscles, current_options = EXERCISE_DATABASE) {
    return current_options.filter( x => 
        target_muscles.includes(x.muscle1) || target_muscles.includes(x.muscle2)
    );
}

// Preserves only exercises which are not derivatives of the provided exercise
// Provided exercise is also removed, if present
function removeDerivatives(provided_exercise, current_options = EXERCISE_DATABASE) {
    return current_options.filter(x => {
        x.parent !== provided_exercise.parent
    });
}

// Removes any instances of specified exercise from the provided collection and any duplicate of exercise
function removeExercise(provided_exercise, current_options = EXERCISE_DATABASE) {
    let arrayWithoutExercise = current_options.filter(exercise => {
        !IsIdentical(exercise, provided_exercise);
    });
    return arrayWithoutExercise;
}

// -------------------------------------------------
// Randomize methods for JSON exercise collections
// -------------------------------------------------

// Returns an exercise randomly selected from the provided collection 
function getRandomExercise(current_options = EXERCISE_DATABASE) {
    const randomIndex = Math.floor(Math.random() * current_options.length);
    return current_options[randomIndex];
}

// -------------------------------------------------------------
// Constructors for WorkoutRegiment & WorkoutCircuit objects
// -------------------------------------------------------------


// Constructor for Exercise
function Exercise(name = "", equipment_needed = "", parent_derivation = "", classification_type ="", muscle_targeted="", secondary_muscle_targeted="" ) {
    this.exerciseName = name;
    this.equipment = equipment_needed;
    this.parent = parent_derivation;
    this.classification = classification_type;
    this.muscle1 = muscle_targeted;
    this.muscle2 = secondary_muscle_targeted;
};

//TODO: ENsure WorkoutRegimen & Workout Circuit are fully deprecated and replaces with list of exercise names
// Constructor for workout regiment - a collection of sets
function WorkoutRegiment(circuits=[]) {
    this.circuits = circuits; 
    /*
    this.getWorkoutJSON = JSON.stringify(this);
    JSON-encoded object:
        {
            "0": {
                "main": "Pullup",
                "fillers": ["arm circles", "lat stretch", "scap push ups"],
            },
            "1": {
                "main": "Dumbbell Rows",
                "fillers": ["Plate X-Outs", "chest stretch", "clamshells"],
            },
            "2": {
                "main": "Squats",
                "fillers": ["Banded Lateral Walk", "Deadbugs", "Plank"],
            },
            ...
        } */
};

// Constructor for workout regiment set - a main exercise coupled with a series of filler exercises
// First exercise in collection is presumed to be the main exercise
// Circuit must contain at least two exercises in the collection
function WorkoutCircuit(title = "", exercises = []){
    this.title = title;
    this.data = exercises;
    /*
    this.getWorkoutJSON = JSON.stringify(this);
   JSON-encoded object:
        {
            "main": "Pullup",
            "fillers": ["arm circles", "lat stretch", "scap push ups"],
        } */
};

// -------------------------------------
// Requested Workout Regiment Generator
// -------------------------------------
// Takes input from form submission from user requesting a generated workout
// equipment_data: list of all available equipment
// workout_duration: short, medium, or long (ie 1, 2 or 3 mini-sets)
// muscle_groups: list of muscle groups to target
// TODO: Ensure unspecified muscle group is properly handled
// Returns array of circuits.
// NOTE: Since using Maps as children is not supported in front end for ReactElements, Return value is
// an array of keyed ReactElements instead.
function generateWorkoutFromRequest(equipment_data, workout_duration, muscle_groups, addChallenge = false){
    
    // Generate number of circuits based on provided workout_duration
    let num_of_circuits =  1;
    switch(workout_duration) {
        case "Medium":
            num_of_circuits = 2;
            break;
        case "Long":
            num_of_circuits = 3;
            break;
        case "Short":
            num_of_circuits =  1;
            break;
        default:
            break;
    }

    // Filter exercise options down to only accessible ones based on provided equipment_data
    let ACCESSIBLE_EXERCISES = filterByEquipment(equipment_data, EXERCISE_DATABASE);
    
    // Appropriately expand provided target muscle groups to include child elements
    if (muscle_groups.includes("Full Body") ) {
        muscle_groups.push("Upper Body","Lower Body", "Core");
    }
    if (muscle_groups.includes("Lower Body") ) {
        muscle_groups.push("Glutes","Hamstrings","Calves", "Hips", "Plyo");
    }
    if (muscle_groups.includes("Upper Body") ) {
        muscle_groups.push("Arms","Back","Chest", "Back", "Core");
    }
    if (muscle_groups.includes("Arms") ) {
        muscle_groups.push("Triceps","Biceps","Shoulders");
    }
    if (muscle_groups.includes("Core") ) {
        muscle_groups.push("Obliques", "Transversus Abdominis");
    }
    let TARGET_MUSCLE_EXERCISES = filterByMuscleGroup(muscle_groups, ACCESSIBLE_EXERCISES);
    
    // Assemble collection of potential main exercises
    let MAIN_EXERCISES = filterByClassification(["Main Upper Body", "Main Lower Body"], TARGET_MUSCLE_EXERCISES);

    // Assemble collection of potential matching stretch & mobility movements
    let MOBILITY_MOVEMENTS = filterByClassification(["Mobility", "Stretch"], ACCESSIBLE_EXERCISES);
    
    // Assemble collection of potential filler exercises
    let filler_classifications = [];
    if (muscle_groups.includes("Upper Body")) {
        filler_classifications.push("Filler Upper Body");
    }
    if (muscle_groups.includes("Lower Body")) {
        filler_classifications.push("Filler Lower Body");
    }
    let FILLER_EXERCISES = filterByClassification(filler_classifications, TARGET_MUSCLE_EXERCISES);

    // Generate a workout consisting of a series of circuits
    // TODO: Ensure no exercise is repeated elsewhere in the workout.
    let generated_workout = [];
    for (let i = 0; i < num_of_circuits; i++) {
        // For each circuit, get a main exercise
        let circuit_exercises = [];
        if (MAIN_EXERCISES.length === 0){
            MAIN_EXERCISES = ACCESSIBLE_EXERCISES;
        }
        let main_exercise = getRandomExercise(MAIN_EXERCISES);
        circuit_exercises.push(main_exercise.exerciseName);
        MAIN_EXERCISES = removeDerivatives(main_exercise, MAIN_EXERCISES); // Ensure no repeats

        // Get a stretch or mobility exercise, ideally one targetting the same muscle group as the main exercise
        let MATCHING_MOVEMENT = filterByMuscleGroup([main_exercise.muscle1, main_exercise.muscle2], MOBILITY_MOVEMENTS);
        if (MATCHING_MOVEMENT.length === 0) {
            MATCHING_MOVEMENT = MOBILITY_MOVEMENTS;
        }
        let matching_stretch = getRandomExercise(MATCHING_MOVEMENT);
        if (matching_stretch !== undefined) {
            circuit_exercises.push(matching_stretch.exerciseName);
        }
        MOBILITY_MOVEMENTS = removeDerivatives(matching_stretch, MOBILITY_MOVEMENTS); // Ensure no repeats

        // Get a filler exercise targetting the core
        let core_exercise = getRandomExercise(filterByClassification(["Core"], ACCESSIBLE_EXERCISES));
        if (core_exercise !== undefined) {
            circuit_exercises.push(core_exercise.exerciseName);
        }
        MOBILITY_MOVEMENTS = removeDerivatives(core_exercise, ACCESSIBLE_EXERCISES); // Ensure no repeats

        // Get 1 more filler exercises, and ensure they are not repeated in the workout.
        let filler_exercise = getRandomExercise(FILLER_EXERCISES);
        if (filler_exercise !== undefined) {
            circuit_exercises.push(filler_exercise.exerciseName);
        }
        MOBILITY_MOVEMENTS = removeDerivatives(filler_exercise, FILLER_EXERCISES); // Ensure no repeats

        // Add new circuit to the exercise regiment
        // Name the circuit based off of its number and its main exercise.
        let title = "Circuit #" + (i+1) + ": " + (main_exercise.muscle1);
        generated_workout.push(new WorkoutCircuit(title, circuit_exercises));
    }

    // Add an extra challenge circuit to the workout if the user received/accepted a challenge
    if (addChallenge === true) {
        let challenge_exercises = [];
        for (let i = 0; i < 3; i++) {
            challenge_exercises.push(getRandomExercise(ACCESSIBLE_EXERCISES).exerciseName);
        }
        generated_workout.push(new WorkoutCircuit("Extra Challenge Circuit", challenge_exercises));
    }

    return generated_workout;
};

export {generateWorkoutFromRequest, Exercise, WorkoutCircuit, WorkoutRegiment}