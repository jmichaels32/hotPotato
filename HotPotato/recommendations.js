const {EXERCISE_DATABASE} = require('./constants.js');

// ----------------------------------------------
// Helper methods for exercise recommendation
// ----------------------------------------------


// ----------------------------------------------
// Boolean  methods for exercise object keys 
// ----------------------------------------------
function isAccessible(available_equipment) {
    return (available_equipment.includes(equipment));
}

function hasClassification(class_type) {
    return (class_type.includes(classification));
}

function hasTargetMuscle(muscle) {
    return (muscle.includes(muscle1) || muscle_group.includes(muscle2));
}

function IsIdentical(uniqueName) {
    return (uniqueName.includes(exerciseName));
}

function isDerivative(parent_exercise) {
    return (parent_exercise.includes(parent));
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
    AccessibleExercises = current_options.filter(isAccessible(available_equipment));
    return AccessibleExercises;
}

// Preserves only exercises with provided classification(s)
function getExercisesByClassification(class_type, current_options = EXERCISE_DATABASE) {
    MatchingExercises = current_options.filter(hasClassification(class_type));
    return MatchingExercises;
}

// Preserves only exercises which target provided muscle group(s) primarily or secondarily
function getExercisesByTargetMuscle(muscle_group, current_options = EXERCISE_DATABASE) {
    TargettingExercises = current_options.filter(hasTargetMuscle(muscle_group));
    return TargettingExercises;
}

// Preserves only exercises which are not derivatives of the provided exercise
// Provided exercise is retained, if present, in current exercise database
function removeDuplicates(provided_exercise, current_options = EXERCISE_DATABASE) {
    provided_name = provided_exercise.exerciseName;
    provided_parent = provided_exercise.parent;
    UniqueExercise = current_options.filter(!isDerivative(provided_parent));
    UniqueExercise.push(provided_exercise); // Avoid removing exercise itself
    return UniqueExercise;
}