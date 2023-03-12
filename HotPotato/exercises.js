import * as mathjs from 'mathjs'; // Used in randomization

// Database for exercises; JSON formatted
// Keys: "exerciseName", "equipment", "parent", "classification", "muscle1", and "muscle2".
export const EXERCISE_DATABASE = require('./exercises.json');

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
    return (input_exercise.exerciseName == input_exercise2.exerciseName);
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

// Preserves only exercises with accessible equipment
function getExercisesByEquipment(available_equipment, current_options = EXERCISE_DATABASE) {
    // Bodyweight exercises are assumed to not be equipment-limited.
    available_equipment.push("Bodyweight");
    let AccessibleExercises = current_options.filter(exercise => {
        isAccessible(exercise, available_equipment);
    });
    return AccessibleExercises;
}

// Preserves only exercises with provided classification(s)
function getExercisesByClassification(classifications, current_options = EXERCISE_DATABASE) {
    let MatchingExercises = current_options.filter(exercise => {
        hasClassifications(exercise, classifications);
    });
    return MatchingExercises;
}

// Preserves only exercises which target provided muscle group(s) primarily or secondarily
function getExercisesByTargetMuscle(target_muscles, current_options = EXERCISE_DATABASE) {
    let TargettingExercises = current_options.filter(exercise => {
        hasTargetMuscle(exercise, target_muscles);
    });
    return TargettingExercises;
}

// Preserves only exercises which are not derivatives of the provided exercise
// Provided exercise is also removed, if present
function removeDerivatives(provided_exercise, current_options = EXERCISE_DATABASE) {
    let UniqueExercise = current_options.filter(exercise => {
        !isDerivative(exercise, current_options);
    });
    return UniqueExercise;
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
function WorkoutCircuit(main_exercise = new Exercise(), filler_exercises=[]){
    this.main = main_exercise;
    this.fillers = filler_exercises;
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
function generateWorkoutFromRequest(equipment_data, workout_duration, muscle_groups){
    // Generate number of circuits based on workout_duration
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

    // Filter exercise options down to only accessible ones
    let POTENTIAL_EXERCISE_DATABASE = getExercisesByEquipment(equipment_data, EXERCISE_DATABASE);

    // Filter exercise options down to only requested muscle groups
    let TARGET_MUSCLE_DATABASE = getExercisesByTargetMuscle(muscle_groups, POTENTIAL_EXERCISE_DATABASE);
    
    // Filter exercises to acquire potential filler exercises based off muscle group request
    let requested_classifications = [];
    requested_classifications.push("Core", "Mobility", "Stretch");
    if (muscle_groups.includes("Upper Body") || muscle_groups.includes("Full Body")) {
        requested_classifications.push("Upper Body Filler", "Upper Body Stretch");
    }
    if (muscle_groups.includes("Lower Body")  || muscle_groups.includes("Full Body")) {
        requested_classifications.push("Lower Body Filler", "Lower Body Stretch");
    }
    let FILLER_DATABASE = getExercisesByClassification(requested_classifications, POTENTIAL_EXERCISE_DATABASE);
    
    // Generate workout circuits based on user requests
    let generated_workout = new WorkoutRegiment()
    let filler_exercises = []
    for (let i = 0; i < num_of_circuits; i++) {
        // Get a main exercise and ensure it is not repeated in the workout
        let main_exercise = getRandomExercise(TARGET_MUSCLE_DATABASE);
        TARGET_MUSCLE_DATABASE = removeDerivatives(main_exercise, TARGET_MUSCLE_DATABASE);
        
        // Get 3 filler exercises
        for (let j = 0; j < 3; j++) {
            // Get a filler exercise and ensure it is not repeated in the workout
            filler_exercises[j] = getRandomExercise(FILLER_DATABASE);
            FILLER_DATABASE = removeDerivatives(main_exercise, FILLER_DATABASE);
        }

        // Add circuit to the exercise regiment
        let generated_circuit = new WorkoutCircuit(main_exercise, filler_exercises);
        generated_workout.circuits.push(generated_circuit);
    }

    return generated_workout;
};

export {generateWorkoutFromRequest, WorkoutCircuit, WorkoutRegiment}