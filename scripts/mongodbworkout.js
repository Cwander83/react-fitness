const data = [{
        week: 1,
        day: 1,
        key: 1,
        workout: {
            exercisename: "Leg Press",
            bodypart: "Legs",
            warmupsets: 1,
            totalsets: 4,
            warmupreps: "1x12",
            warmupdesc: "60% of Max Weight",
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 1,
        key: 2,
        workout: {
            exercisename: "Leg Extenstions",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "Last 2 Sets: Down weight and go to fail",
            superset: null
        }
    },
    {
        week: 1,
        day: 1,
        key: 3,
        workout: {
            exercisename: "Lunges(Weighted)",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "12 Steps per Foot",
            regulardesc: "Hold Dumbbells",
            superset: null
        }
    },
    {
        week: 1,
        day: 1,
        key: 4,
        workout: {
            exercisename: "Lying Leg Curls",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: 1
        }
    },
    {
        week: 1,
        day: 1,
        key: 5,
        workout: {
            exercisename: "Jumping Squats",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "No Extra Weight, Cross Arms Shoulder Level",
            superset: 1
        }
    },
    {
        week: 1,
        day: 2,
        key: 6,
        workout: {
            exercisename: "Dumbbell Bench Press",
            bodypart: "Chest",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: 12,
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 2,
        key: 7,
        workout: {
            exercisename: "Pullups",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "to Fail",
            regulardesc: "Assisted if needed",
            superset: null
        }
    },
    {
        week: 1,
        day: 2,
        key: 8,
        workout: {
            exercisename: "Bent Over Barbell Rows",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 2,
        key: 9,
        workout: {
            exercisename: "Pushups",
            bodypart: "Chest",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "to Fail",
            regulardesc: "Standard Arm Placement",
            superset: 2
        }
    },
    {
        week: 1,
        day: 2,
        key: 10,
        workout: {
            exercisename: "Wide Grip Pulldowns",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "15-18",
            regulardesc: "60% of Max Weight",
            superset: 2
        }
    },
    {
        week: 1,
        day: 3,
        key: 11,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 1,
        day: 4,
        key: 12,
        workout: {
            exercisename: "Cable Tricep Pulldowns",
            bodypart: "Arms",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 4,
        key: 13,
        workout: {
            exercisename: "Ez Bar Standing Bicep Curls",
            bodypart: "Arms",
            warmupsets: 1,
            totalsets: 6,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 5,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 4,
        key: 14,
        workout: {
            exercisename: "Dumbbell Overhead Tricep Extenstions",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: 3
        }
    },
    {
        week: 1,
        day: 4,
        key: 15,
        workout: {
            exercisename: "Sitting Hammer Curls",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: 3
        }
    },
    {
        week: 1,
        day: 5,
        key: 16,
        workout: {
            exercisename: "Sitting Military Barbell Press",
            bodypart: "Shoulders",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 5,
        key: 17,
        workout: {
            exercisename: "Side Lateral Raises",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 5,
        key: 18,
        workout: {
            exercisename: "Upright Barbell Rows (21's)",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "7",
            regulardesc: "Equal Reps(Wide => Normal => Close) Grip",
            superset: null
        }
    },
    {
        week: 1,
        day: 5,
        key: 19,
        workout: {
            exercisename: "Standing Dumbbell Shrugs",
            bodypart: "Traps",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "12-14",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 5,
        key: 20,
        workout: {
            exercisename: "Standing Calf Raises",
            bodypart: "Calves",
            warmupsets: null,
            totalsets: 5,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 5,
            regularreps: "15-20",
            regulardesc: "70% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 6,
        key: 21,
        workout: {
            exercisename: "Deadlifts",
            bodypart: "Lower Back",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "10-12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 1,
        day: 6,
        key: 22,
        workout: {
            exercisename: "Hanging Knee Lifts",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "To Fail",
            regulardesc: "Body Weight Only",
            superset: null
        }
    },
    {
        week: 1,
        day: 6,
        key: 23,
        workout: {
            exercisename: "Cable Crunches",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "15",
            regulardesc: "Your Weight of Choice",
            superset: null
        }
    },
    {
        week: 1,
        day: 6,
        key: 24,
        workout: {
            exercisename: "Planks",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: null,
            regulardesc: "30-45 Second Hold",
            superset: null
        }
    },
    {
        week: 1,
        day: 7,
        key: 25,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 2,
        day: 1,
        key: 26,
        workout: {
            exercisename: "Lunges(Weighted)",
            bodypart: "Legs",
            warmupsets: 2,
            totalsets: 4,
            warmupreps: "20 Steps per Leg",
            warmupdesc: "No Weight",
            regularsets: 4,
            regularreps: "20 Steps per Leg",
            regulardesc: "Hold Dumbbells",
            superset: null
        }
    },
    {
        week: 2,
        day: 1,
        key: 27,
        workout: {
            exercisename: "Box Jumpes",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "To Fail",
            regulardesc: "Choice Tallest Box You Can Reach",
            superset: null
        }
    },
    {
        week: 2,
        day: 1,
        key: 28,
        workout: {
            exercisename: "Leg Extenstions",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "20-25",
            regulardesc: "60% of Max Weight",
            superset: 4
        }
    },
    {
        week: 2,
        day: 1,
        key: 29,
        workout: {
            exercisename: "Body Squats",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "10",
            regulardesc: "Cross Arms at Shoulder Level",
            superset: 4
        }
    },
    {
        week: 2,
        day: 2,
        key: 30,
        workout: {
            exercisename: "Reverse Grip Pulldowns",
            bodypart: "Upper Back",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "10",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 2,
        key: 31,
        workout: {
            exercisename: "Barbell Bench Press",
            bodypart: "Chest",
            warmupsets: 2,
            totalsets: 8,
            warmupreps: "10-12",
            warmupdesc: "60% of Max Weight",
            regularsets: 6,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 2,
        key: 32,
        workout: {
            exercisename: "Decline Barbell Bench Press",
            bodypart: "Chest",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 2,
        key: 33,
        workout: {
            exercisename: "One-Arm Dumbbell Rows",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "16-18 per Arm",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 3,
        key: 34,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 2,
        day: 4,
        key: 35,
        workout: {
            exercisename: "Overhead Cable Tricep Extensions",
            bodypart: "Arms",
            warmupsets: 2,
            totalsets: 4,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 2,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 4,
        key: 36,
        workout: {
            exercisename: "Straight Barbell Bicep Curls",
            bodypart: "Arms",
            warmupsets: 2,
            totalsets: 4,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 2,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 4,
        key: 37,
        workout: {
            exercisename: "Ez Bar Skull Crushers",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "16-18",
            regulardesc: "60% of Max Weight",
            superset: 5
        }
    },
    {
        week: 2,
        day: 4,
        key: 38,
        workout: {
            exercisename: "Dumbbell Alternate Bicep Curls",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 2,
            regularreps: "8-10 per Arm",
            regulardesc: "60% of Max Weight",
            superset: 5
        }
    },
    {
        week: 2,
        day: 4,
        key: 39,
        workout: {
            exercisename: "Standing Bent-Over One-Arm Dumbbell Triceps Extension",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 2,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 2,
            regularreps: "15-18",
            regulardesc: "Light Weight Focus on Squeezing Muscle",
            superset: null
        }
    },
    {
        week: 2,
        day: 4,
        key: 40,
        workout: {
            exercisename: "Standing Cable Curls",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 2,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 2,
            regularreps: "12-15",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 5,
        key: 41,
        workout: {
            exercisename: "Cuban Press",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "50% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 5,
        key: 42,
        workout: {
            exercisename: "Standing Barbell Behind Neck",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "15-18",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 5,
        key: 43,
        workout: {
            exercisename: "Side Lateral Raises",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "15-18",
            regulardesc: "50% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 5,
        key: 44,
        workout: {
            exercisename: "Seated Calf Raises",
            bodypart: "Calves",
            warmupsets: null,
            totalsets: 5,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 5,
            regularreps: "15-18",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 5,
        key: 45,
        workout: {
            exercisename: "Donkey Calf Raises",
            bodypart: "Calves",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "15",
            regulardesc: "Body Weight, Hold for 2 Seconds",
            superset: null
        }
    },
    {
        week: 2,
        day: 6,
        key: 46,
        workout: {
            exercisename: "Rack Pull",
            bodypart: "Lower Back",
            warmupsets: 1,
            totalsets: 5,
            warmupreps: "10-12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "12-15",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 6,
        key: 47,
        workout: {
            exercisename: "Hyper Extensions",
            bodypart: "Lower Back",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "15-18",
            regulardesc: "No Weight",
            superset: null
        }
    },
    {
        week: 2,
        day: 6,
        key: 48,
        workout: {
            exercisename: "Lying Knee Lifts",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "10-15",
            regulardesc: "Hold Dumbbell Between Feet",
            superset: null
        }
    },
    {
        week: 2,
        day: 6,
        key: 49,
        workout: {
            exercisename: "Hanging Legs Lifts",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "To Fail",
            regulardesc: "Extend Legs with a Slight Bend",
            superset: null
        }
    },
    {
        week: 2,
        day: 6,
        key: 50,
        workout: {
            exercisename: "Planks",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: null,
            regulardesc: "Hold 30-45 Seconds",
            superset: null
        }
    },
    {
        week: 2,
        day: 7,
        key: 51,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 3,
        day: 1,
        key: 52,
        workout: {
            exercisename: "Leg Press",
            bodypart: "Legs",
            warmupsets: 1,
            totalsets: 4,
            warmupreps: "1x12",
            warmupdesc: "60% of Max Weight",
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 1,
        key: 53,
        workout: {
            exercisename: "Leg Extenstions",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "Last 2 Sets: Down weight and go to fail",
            superset: null
        }
    },
    {
        week: 3,
        day: 1,
        key: 54,
        workout: {
            exercisename: "Lunges(Weighted)",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "12 Steps per Foot",
            regulardesc: "Hold Dumbbells",
            superset: null
        }
    },
    {
        week: 3,
        day: 1,
        key: 55,
        workout: {
            exercisename: "Lying Leg Curls",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: 1
        }
    },
    {
        week: 3,
        day: 1,
        key: 56,
        workout: {
            exercisename: "Jumping Squats",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "No Extra Weight, Cross Arms Shoulder Level",
            superset: 1
        }
    },
    {
        week: 3,
        day: 2,
        key: 57,
        workout: {
            exercisename: "Dumbbell Bench Press",
            bodypart: "Chest",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: 12,
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 2,
        key: 58,
        workout: {
            exercisename: "Pullups",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "to Fail",
            regulardesc: "Assisted if needed",
            superset: null
        }
    },
    {
        week: 3,
        day: 2,
        key: 59,
        workout: {
            exercisename: "Bent Over Barbell Rows",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 2,
        key: 60,
        workout: {
            exercisename: "Pushups",
            bodypart: "Chest",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "to Fail",
            regulardesc: "Standard Arm Placement",
            superset: 2
        }
    },
    {
        week: 3,
        day: 2,
        key: 61,
        workout: {
            exercisename: "Wide Grip Pulldowns",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "15-18",
            regulardesc: "60% of Max Weight",
            superset: 2
        }
    },
    {
        week: 3,
        day: 3,
        key: 62,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 3,
        day: 4,
        key: 63,
        workout: {
            exercisename: "Cable Tricep Pulldowns",
            bodypart: "Arms",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 4,
        key: 64,
        workout: {
            exercisename: "Ez Bar Standing Bicep Curls",
            bodypart: "Arms",
            warmupsets: 1,
            totalsets: 6,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 5,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 4,
        key: 65,
        workout: {
            exercisename: "Dumbbell Overhead Tricep Extenstions",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: 3
        }
    },
    {
        week: 3,
        day: 4,
        key: 66,
        workout: {
            exercisename: "Sitting Hammer Curls",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: 3
        }
    },
    {
        week: 3,
        day: 5,
        key: 67,
        workout: {
            exercisename: "Sitting Military Barbell Press",
            bodypart: "Shoulders",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 5,
        key: 68,
        workout: {
            exercisename: "Side Lateral Raises",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 5,
        key: 69,
        workout: {
            exercisename: "Upright Barbell Rows (21's)",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "7",
            regulardesc: "Equal Reps(Wide => Normal => Close) Grip",
            superset: null
        }
    },
    {
        week: 3,
        day: 5,
        key: 70,
        workout: {
            exercisename: "Standing Dumbbell Shrugs",
            bodypart: "Traps",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "12-14",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 5,
        key: 71,
        workout: {
            exercisename: "Standing Calf Raises",
            bodypart: "Calves",
            warmupsets: null,
            totalsets: 5,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 5,
            regularreps: "15-20",
            regulardesc: "70% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 6,
        key: 72,
        workout: {
            exercisename: "Deadlifts",
            bodypart: "Lower Back",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "10-12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "80% of Max Weight",
            superset: null
        }
    },
    {
        week: 3,
        day: 6,
        key: 73,
        workout: {
            exercisename: "Hanging Knee Lifts",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "To Fail",
            regulardesc: "Body Weight Only",
            superset: null
        }
    },
    {
        week: 3,
        day: 6,
        key: 74,
        workout: {
            exercisename: "Cable Crunches",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "15",
            regulardesc: "Your Weight of Choice",
            superset: null
        }
    },
    {
        week: 3,
        day: 6,
        key: 75,
        workout: {
            exercisename: "Planks",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: null,
            regulardesc: "30-45 Second Hold",
            superset: null
        }
    },
    {
        week: 3,
        day: 7,
        key: 76,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 4,
        day: 1,
        key: 77,
        workout: {
            exercisename: "Lunges(Weighted)",
            bodypart: "Legs",
            warmupsets: 2,
            totalsets: 4,
            warmupreps: "20 Steps per Leg",
            warmupdesc: "No Weight",
            regularsets: 4,
            regularreps: "20 Steps per Leg",
            regulardesc: "Hold Dumbbells",
            superset: null
        }
    },
    {
        week: 4,
        day: 1,
        key: 78,
        workout: {
            exercisename: "Box Jumpes",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "To Fail",
            regulardesc: "Choice Tallest Box You Can Reach",
            superset: null
        }
    },
    {
        week: 4,
        day: 1,
        key: 79,
        workout: {
            exercisename: "Leg Extenstions",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "20-25",
            regulardesc: "60% of Max Weight",
            superset: 4
        }
    },
    {
        week: 4,
        day: 1,
        key: 80,
        workout: {
            exercisename: "Body Squats",
            bodypart: "Legs",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "10",
            regulardesc: "Cross Arms at Shoulder Level",
            superset: 4
        }
    },
    {
        week: 4,
        day: 2,
        key: 81,
        workout: {
            exercisename: "Reverse Grip Pulldowns",
            bodypart: "Upper Back",
            warmupsets: 2,
            totalsets: 6,
            warmupreps: "10",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 2,
        key: 82,
        workout: {
            exercisename: "Barbell Bench Press",
            bodypart: "Chest",
            warmupsets: 2,
            totalsets: 8,
            warmupreps: "10-12",
            warmupdesc: "60% of Max Weight",
            regularsets: 6,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 2,
        key: 83,
        workout: {
            exercisename: "Decline Barbell Bench Press",
            bodypart: "Chest",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 2,
        key: 84,
        workout: {
            exercisename: "One-Arm Dumbbell Rows",
            bodypart: "Upper Back",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "16-18 per Arm",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 3,
        key: 85,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    },
    {
        week: 4,
        day: 4,
        key: 86,
        workout: {
            exercisename: "Overhead Cable Tricep Extensions",
            bodypart: "Arms",
            warmupsets: 2,
            totalsets: 4,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 2,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 4,
        key: 87,
        workout: {
            exercisename: "Straight Barbell Bicep Curls",
            bodypart: "Arms",
            warmupsets: 2,
            totalsets: 4,
            warmupreps: "12",
            warmupdesc: "60% of Max Weight",
            regularsets: 2,
            regularreps: "18-20",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 4,
        key: 88,
        workout: {
            exercisename: "Ez Bar Skull Crushers",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 6,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 6,
            regularreps: "16-18",
            regulardesc: "60% of Max Weight",
            superset: 5
        }
    },
    {
        week: 4,
        day: 4,
        key: 89,
        workout: {
            exercisename: "Dumbbell Alternate Bicep Curls",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 2,
            regularreps: "8-10 per Arm",
            regulardesc: "60% of Max Weight",
            superset: 5
        }
    },
    {
        week: 4,
        day: 4,
        key: 90,
        workout: {
            exercisename: "Standing Bent-Over One-Arm Dumbbell Triceps Extension",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 2,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 2,
            regularreps: "15-18",
            regulardesc: "Light Weight Focus on Squeezing Muscle",
            superset: null
        }
    },
    {
        week: 4,
        day: 4,
        key: 91,
        workout: {
            exercisename: "Standing Cable Curls",
            bodypart: "Arms",
            warmupsets: null,
            totalsets: 2,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 2,
            regularreps: "12-15",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 5,
        key: 92,
        workout: {
            exercisename: "Cuban Press",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "10-12",
            regulardesc: "50% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 5,
        key: 93,
        workout: {
            exercisename: "Standing Barbell Behind Neck",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "15-18",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 5,
        key: 94,
        workout: {
            exercisename: "Side Lateral Raises",
            bodypart: "Shoulders",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "15-18",
            regulardesc: "50% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 5,
        key: 95,
        workout: {
            exercisename: "Seated Calf Raises",
            bodypart: "Calves",
            warmupsets: null,
            totalsets: 5,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 5,
            regularreps: "15-18",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 5,
        key: 96,
        workout: {
            exercisename: "Donkey Calf Raises",
            bodypart: "Calves",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "15",
            regulardesc: "Body Weight, Hold for 2 Seconds",
            superset: null
        }
    },
    {
        week: 4,
        day: 6,
        key: 97,
        workout: {
            exercisename: "Rack Pull",
            bodypart: "Lower Back",
            warmupsets: 1,
            totalsets: 5,
            warmupreps: "10-12",
            warmupdesc: "60% of Max Weight",
            regularsets: 4,
            regularreps: "12-15",
            regulardesc: "60% of Max Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 6,
        key: 98,
        workout: {
            exercisename: "Hyper Extensions",
            bodypart: "Lower Back",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: "15-18",
            regulardesc: "No Weight",
            superset: null
        }
    },
    {
        week: 4,
        day: 6,
        key: 99,
        workout: {
            exercisename: "Lying Knee Lifts",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "10-15",
            regulardesc: "Hold Dumbbell Between Feet",
            superset: null
        }
    },
    {
        week: 4,
        day: 6,
        key: 100,
        workout: {
            exercisename: "Hanging Legs Lifts",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 4,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 4,
            regularreps: "To Fail",
            regulardesc: "Extend Legs with a Slight Bend",
            superset: null
        }
    },
    {
        week: 4,
        day: 6,
        key: 101,
        workout: {
            exercisename: "Planks",
            bodypart: "Abs",
            warmupsets: null,
            totalsets: 3,
            warmupreps: null,
            warmupdesc: null,
            regularsets: 3,
            regularreps: null,
            regulardesc: "Hold 30-45 Seconds",
            superset: null
        }
    },
    {
        week: 4,
        day: 7,
        key: 102,
        workout: {
            exercisename: "Cardio",
            bodypart: "Cardio",
            warmupsets: null,
            totalsets: null,
            warmupreps: null,
            warmupdesc: null,
            regularsets: null,
            regularreps: "40 Minutes",
            regulardesc: "Biking, Running, etc.",
            superset: null
        }
    }

];

module.exports = data;