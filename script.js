// Add an event listener to the "Generate Routine" button
document.getElementById('generate-btn').addEventListener('click', function() {

    const fitnessLevel = document.getElementById('fitness-level').value; //This will get the level of fitness selected
    const workoutType = document.getElementById('workout-type').value;   //This will get the type of muscle groups selected
    
    const workouts = {
        beginner: {
            'full-body': ['Push-Ups', 'Squats', 'Plank'],
            'upper-body': ['Push-Ups', 'Bicep Curls', 'Tricep Dips'],
            'lower-body': ['Squats', 'Lunges', 'Calf Raises']
        },
        intermediate: {
            'full-body': ['Burpees', 'Deadlifts', 'Mountain Climbers'],
            'upper-body': ['Bench Press', 'Pull-Ups', 'Shoulder Press'],
            'lower-body': ['Deadlifts', 'Leg Press', 'Bulgarian Split Squats']
        },
        advanced: {
            'full-body': ['Snatch', 'Clean and Jerk', 'Muscle-Ups'],
            'upper-body': ['Handstand Push-Ups', 'Weighted Pull-Ups', 'Dumbbell Bench Press'],
            'lower-body': ['Squats with Weights', 'Pistol Squats', 'Box Jumps']
        }
    };
    // Get the routine based on the user's selection
    const routine = workouts[fitnessLevel][workoutType];

    // Display the generated routine in the output div
    document.getElementById('routine-output').innerHTML = 'Your Routine: ' + routine.join(', ');
});
