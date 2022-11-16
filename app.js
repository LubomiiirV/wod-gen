const NumberOfWods = 58

const wods = new BuildArray(NumberOfWods)

// Use the following variables to 
// define your random wods:
wods[0]

wods[1] = {
    name: `11.1`,
    wod: `
    10 Min AMRAP

    30 DUs
    15 Power Snatches 75/55 lbs`,
    tips: `
    QUICK TIPS

    Top 5% score: 338 reps (7 rounds + 23 DUs) 
    DUs unbroken 
    Split snatches to 2-3 sets with quick rest 
    Minimize transition times`
}

wods[2] = {
    name: `11.2`,
    wod: `
    15 Min AMRAP

    9 Deadlifts 155 / 100 lbs
    12 HR Push Ups
    15 Box Jumps 24 / 20″`,
    tips: `
    QUICK TIPS

    Top 5 % score: 408 reps(11 rounds + 3 HR push ups)
    Go unbroken on the deadlifts
    Recover on HR push ups, keep steady pace
    Get over box jumps quickly
    There is no need to rest in this WOD, you just need to keep pushing the pace
    `
}


wods[3] = {
    name: `11.3`,
    wod: `
    5 Min AMRAP

    Squat Clean 165 / 110 lbs
    Jerk 165 / 110 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 60 reps(30 + 30)
    Do only singles
    Steady pace from the beginning
    Use your legs on the push jerk
    `
}

wods[4] = {
    name: `11.4`,
    wod: `
    10 Min AMRAP

    60 Bar Facing Burpees
    30 Overhead Squats 120 / 90 lbs
    10 Muscle Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 120 reps(1 round + 20 burpees)
    Steady pace on the burpees, step down / up to the burpee if you need to
    Try to do overhead squats in a few sets as possible, try 12 + 10 + 8 or 18 +
    Get over muscle ups as quickly as you can, if you need to split sets try 4 + 3 + 3 or 3 + 3 + 2 + 2
    `
}
wods[5] = {
    name: `11.5`,
    wod: `
    20 Min AMRAP

    5 Power Cleans 145 / 100 lbs
    10 Toes - to - Bars
    15 Wall Balls 20 / 14 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 330 reps(11 rounds)
    Single on power cleans
    TTB in 2 sets of 6 + 4
    Wall balls unbrokenc if you feel ok or in sets of 8 + 7 or 6 + 5 + 4
    Minimize transition times
    `
}

wods[6] = {
    name: `11.6`,
    wod: `
    7 Min AMRAP

    3 - 6 - 9 - 12 - 15 - …
        Thrusters 100 / 65 lbs
    Chest - to - Bar Pull Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 121 reps(13 C2B in round of 18)
    Do max of 7 thrusters in 1 set with quick rest between sets
    Do max of 4 C2B in 1 set, it is worth to split even the set of 6 C2B to keep moving
    `
}

wods[7] = {
    name: `12.1`,
    wod: `
    7 Min AMRAP

    Target Burpees`,
    tips: `
    QUICK TIPS

    Top 5 % score: 123 reps
    Just go and don’ t stop, steady pace, keep moving and improve the pace in the last minute
    `
}

wods[8] = {
    name: `12.2`,
    wod: `
    10 Min AMRAP

    30 Snatches 75 / 45 lbs
    30 Snatches 135 / 75 lbs
    30 Snatches 165 / 100 lbs
    Max Snatches 210 / 120 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 75 reps(15 with 165 / 100 lbs)
    Do 12 + 10 + 8 or 6× 5 with 75 / 45 lbs
    On heavier weights go for singles with constant rest
    `
}

wods[9] = {
    name: `12.3`,
    wod: `
    18 Min AMRAP

    15 Box Jumps 24 / 20″
    12 Push Presses 115 / 75
    9 Toes - to - Bars`,
    tips: `
    QUICK TIPS

    Top 5 % score: 367 reps(10 rounds + 7 box jumps)
    Rest on the top of the box to recover
    Push presses unbroken or in 2 sets of 7 + 5
    Split TTB in the 2 sets of 5 + 4
    `
}

wods[10] = {
    name: `12.4`,
    wod: `
    12 Min AMRAP

    150 Wall Balls 20 / 14 lbs
    90 DUs
    30 Muscle Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 255 reps(15 muscle ups)
    On wall balls try multiple small sets with quick rest like 30 sets of 5 or try large / small set approach, this will allow you to do a lot of wall balls and recover with smaller set 40 + 10 + 10 + 30 + 10 + 10 + 20 + 20DUs in 2 or 3 sets, don’ t need to go unbroken as you need to recover before MU
    One large and multiple small sets on muscle ups
    `
}

wods[11] = {
    name: `12.5`,
    wod: `
    7 Min AMRAP

    3 - 6 - 9 - 12 - 15 - …
    Thrusters 100 / 65 lbs
    Chest - to - Bar Pull Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 121 reps(13 C2B in round of 18)
    Do max of 7 thrusters in 1 set with quick rest between sets
    Do max of 4 C2B in 1 set, it is worth to split even the set of 6 C2B to keep moving
    `
}

wods[12] = {
    name: ` 13.1`,
    wod: `
    17 Min AMRAP

    40 Target Burpees
    30 Snatches 75 / 45 lbs
    30 Target Burpees
    30 Snatches 135 / 75 lbs
    20 Target Burpees
    30 Snatches 165 / 100 lbs
    10 Target Burpees
    Max Snatches 210 / 120 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 160 reps(10 Snatches with 165 / 100 lbs)
    Steady pace on target burpees, don’ t stop, better to go slowly
    Singles on snatches except round with 75 / 45 lbs, go for sets of 5 - 10 reps there, try 12 + 10 + 8 or 6× 5

    `
}

wods[13] = {
    name: ` 13.2`,
    wod: `
    10 Min AMRAP

    5 Shoulder-to-Overhead 115/75 lbs
    10 Deadlifts 115/75 lbs
    15 Box Jumps 24/20″`,
    tips: `
    QUICK TIPS

    Top 5% score: 294 reps (9 rounds + 9 box jumps)
    Use your legs on shoulder-to-overhead -> do push jerks
    Finish 5 push jerks and 10 deadlifts unbroken
    Recover on top of the box then rebound from the ground
    Quick transitions, you don’t need to waste time chalking hands in this wod
    `
}

wods[14] = {
    name: ` 13.3`,
    wod: `
    12 Min AMRAP

    150 Wall Balls 20 / 14 lbs
    90 DUs
    30 Muscle Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 255 reps(15 muscle ups)
    On wall balls try multiple small sets with quick rest like 30 sets of 5 or try large / small set approach, this will allow you to do a lot of wall balls and recover with smaller set 40 + 10 + 10 + 30 + 10 + 10 + 20 + 20
    DUs in 2 or 3 sets, don’ t need to go unbroken as you need to recover before MU
    One large and multiple small sets on muscle ups
    `
}

wods[15] = {
    name: ` 13.4`,
    wod: `
    7 Min AMRAP

    3 - 6 - 9 - 12 - …
    Clean and Jerks 135 / 95 lbs
    Toes - to - Bars`,
    tips: `
    QUICK TIPS

    Top 5 % score: 97 reps(5 rounds + 7 clean and jerks)
    Singles on clean and jerks
    Max of 6 reps on TTB
    `
}

wods[16] = {
    name: ` 13.5`,
    wod: `
    4 Min AMRAP

    15 Thrusters 100 / 65 lbs
    15 Chest - to - Bar Pull Ups
    Time extends by 4 minutes
    for each 3 completed rounds`,
    tips: `
    QUICK TIPS

    Top 5 % score: 89 reps
    The goal is to get over first 4 minutes
    Go hard on the thrusters
    Try 6 + 5 + 4 on C2B pull ups with super short rest, time goes quickly and 4 minutes will pass quickly
    `
}

wods[17] = {
    name: ` 14.1`,
    wod: `
    10 Min AMRAP

    30 DUs
    15 Power Snatches 75 / 55 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 338 reps(7 rounds + 23 DUs)
    DUs unbroken
    Split snatches to 2 - 3 sets with quick rest
    Minimize transition times
    `
}

wods[18] = {
    name: ` 14.2`,
    wod: `
    From 0: 00 to 3: 00

    2 Rounds of
    10 Overhead Squats 95 / 65 lbs
    10 Chest - to - Bar Pull Ups

    From 3: 00 to 6: 00

    2 Rounds of
    12 Overhead Squats 95 / 65 lbs
    12 Chest - to - Bar Pull Ups

    From 6: 00 to 9: 00

    2 Rounds of
    14 Overhead Squats 95 / 65 lbs
    14 Chest - to - Bar Pull Ups

    Etc., following same pattern until you fail to complete both rounds`,
    tips: `
    QUICK TIPS

    Top 5 % score: 184 reps(40 reps in 9: 00 - 12: 00)
    Do overhead squats unbroken, rest enough before you start the set
    Small sets on C2B pull ups even singles can get you through round of 14 s
    `
}

wods[19] = {
    name: ` 14.3`,
    wod: `
    8 Min Time Cap

    10 Deadlifts 135 / 95 lbs
    15 Box Jumps 24 / 20″
    15 Deadlifts 185 / 135 lbs
    15 Box Jumps 24 / 20″
    20 Deadlifts 225 / 155 lbs
    15 Box Jumps 24 / 20″
    25 Deadlifts 275 / 185 lbs
    15 Box Jumps 24 / 20″
    30 Deadlifts 315 / 250 lbs
    15 Box Jumps 24 / 20″
    35 Deadlifts 365 / 225 lbs
    15 Box Jumps 24 / 20″`,
    tips: `
    QUICK TIPS

    Top 5 % score: 140 reps(10 Deadlifts with 315 / 250 lbs)
    The lower back fatigue is main problem in this WOD
    Do max of 5 deadlifts in the set even with lighter weights and decrease this reps when weight gets heavier
    Step ups / downs were allowed in this WOD, make use of that if you are not superefficient on the box jumps
    `
}

wods[20] = {
    name: ` 14.4`,
    wod: `
    14 Min AMRAP

    60 cal Row
    50 Toes - to - Bars
    40 Wall Balls 20 / 14 lbs
    30 Cleans 135 / 95 lbs
    20 Muscle Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 192 reps(12 Muscle Ups)
    Steady pace on the rower, don’ t start too quickly as it is the first exercise
    Small sets on TTB(4 - 5 reps) to avoid fatigue where you need to rest for long time or do singles
    You should be recovered(low HR) after TTB so hit as much wall balls as you can and then finish them
    Singles on cleans, just get through with almost no rest between reps
    If you have over 2 min left, split the muscle ups to small sets else go for one large set and a few small sets
    `
}

wods[21] = {
    name: ` 14.5`,
    wod: `
    For Time
    21 - 18 - 15 - 12 - 9 - 6 - 3
    Thrusters 95 / 65 lbs
    Bar Facing Burpees`,
    tips: `
    QUICK TIPS

    Top 5 % time: 12: 22
    Do max of 7 thrusters unbroken even in set of 21, this will save your shoulders and your heart rate won’ t peak so high
    Steady pace on the burpees, step up and“ fall” down to burpees to save the energy

    `
}

wods[22] = {
    name: ` 15.1`,
    wod: `
    Part A: 9 Min AMRAP

    15 Toes - to - Bars
    10 Deadlifts 115 / 75 lbs
    5 Snatches 115 / 75 lbs

    Part B: 6 Minutes

    for1 RM Clean and Jerk`,
    tips: `
    QUICK TIPS

    Top 5 % score: 173 reps(5 rounds + 8 deadlifts) + 265 lbs
    Do TTB in 3 or more sets
    It is also good idea to split the deadlifts to 2 sets
    Singles on snatches
    Part B: do 90 - 95 % as 1 st try, 96 - 98 % as 2n d and try hit PR in the last try
    `
}

wods[23] = {
    name: ` 15.2`,
    wod: `
    From 0: 00 to 3: 00

    2 Rounds of
    10 Overhead Squats 95 / 65 lbs
    10 Chest - to - Bar Pull Ups

    From 3: 00 to 6: 00

    2 Rounds of
    12 Overhead Squats 95 / 65 lbs
    12 Chest - to - Bar Pull Ups

    From 6: 00 to 9: 00

    2 Rounds of
    14 Overhead Squats 95 / 65 lbs
    14 Chest - to - Bar Pull Ups

    Etc., following same pattern until you fail to complete both rounds`,
    tips: `
    QUICK TIPS

    Top 5 % score: 184 reps(40 reps in 9: 00 - 12: 00)
    Do overhead squats unbroken, rest enough before you start the set
    Small sets on C2B pull ups even singles can get you through round of 14 s
    `

}
wods[24] = {
    name: ` 15.3`,
    wod: `
    14 Min AMRAP

    7 Muscle Ups
    50 Wall Balls 20 / 14 lbs
    100 DUs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 367 reps(2 rounds + 46 wall balls)
    Muscle ups in 2 sets or unbroken if you are great at them
    Wall balls in 1 large set and a few small sets or in many small sets like 10 sets of 5 with a quick rest
    Don’ t do DUs unbroken, split them to at least 2 sets
    `
}

wods[25] = {
    name: ` 15.4`,
    wod: `
    8 Min AMRAP

    3 - 6 - 9 - 12 - 15 - 18 - 21 - …HSPU
    3 - 3 - 3 - 6 - 6 - 6 - 9 - …Cleans 185 / 125 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 82 reps
    Your goal is to avoid fatigue on HSPU, do only sets of 3 and 6 unbroken
    Singles on the cleans, go for power clean if you can
    `
}

wods[26] = {
    name: ` 15.5`,
    wod: `
    For Time

    27 - 21 - 15 - 9
    Row(calories)
    Thrusters 95 / 65 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % time: 8: 45
    Steady pace on the rower, don’ t start too quickly with round of 27 cals, about 1200 cal / hr should be maintainable to get a good time Do max of 7 thrusters unbroken, this will save your heart rate so it won’ t peak so high
    `
}

wods[27] = {
    name: ` 16.1`,
    wod: `
    20 Min AMRAP

    25 - ft.Overhead Walking Lunges 95 / 65 lbs
    8 Bar Facing Burpees
    25 - ft.Overhead Walking Lunges 95 / 65 lbs
    8 Chest - to - Bar Pull Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 230 reps(8 rounds + 4 pull ups)
    Do lunges unbroken
    Steady slow pace on burpees
    Split C2B pull ups to save forearm for lunges
    `
}

wods[28] = {
    name: `16.2`,
    wod: `
    4 Min Time Cap for

    25 Toes - to - Bars
    50 Double - Unders
    15 Squat Cleans 135 / 85 lbs

    If you finish before 4: 00, add 4 minutes and continue :
    25 TTB
    50 DUs
    13 Sq Cleans 185 / 115

    Same rule applies

    for other rounds + 4 minutes and decreased reps on squat cleans with increased weight
    25 TTB + 50 DUs + 11 Sq Cleans 225 / 145 lbs
    25 TTB + 50 DUs + 9 Sq Cleans 275 / 175 lbs
    25 TTB + 50 DUs + 7 Sq Cleans 315 / 205 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 257 reps(2 rounds + 4 cleans with 225 / 145 lbs)
    There are 2 sticky points A) you will get fatigued on TTB or B) barbell will get too heavy
    Avoid TTB fatigue by doing only sets of 3 - 4 reps with quick rest(even from beginning)
    Try to do DUs unbroken or in 2 sets
    Singles on squat cleans all the time, just increase the rest between reps in later rounds
    `
}

wods[29] = {
    name: `16.3`,
    wod: `
    7 Min AMRAP

    10 Power Snatches 75 / 55 lbs
    3 Bar Muscle Ups`,
    tips: `
    QUICK TIPS

    Top 5 % score: 101 reps(7 rounds + 10 snatches)
    Split power snatches to 2 sets, this will allow you to be faster on muscle ups
    Jump right into muscle ups and do them unbroken
    Minimizing transition is a key to good score
    `
}

wods[30] = {
    name: `16.4`,
    wod: `
    13 Min AMRAP

    55 Deadlifts 225 / 155 lbs
    55 Wall Balls 20 / 14 lbs
    55 cal Row
    55 HSPU`,
    tips: `
    QUICK TIPS

    Top 5 % score: 205 reps(40 HSPU)
    Split deadlifts as much as you can, even 11 sets of 5 is good strategy to save energy for rest of the AMRAP
    On wall balls go for large set and a few small sets like 30 + 7 + 7 + 11 or for many small sets like the deadlifts(11× 5)
    Get on the rower ASAP and row with steady pace, you should be able to maintain 1200 cal / hr if you want to reach top 5 %
    Split HSPU to many small sets with minimal rest, do only about 25 % of your max rep set in the first set
    `
}

wods[31] = {
    name: `16.5`,
    wod: `
    For Time

    21 - 18 - 15 - 12 - 9 - 6 - 3
    Thrusters 95 / 65 lbs
    Bar Facing Burpees`,
    tips: `
    QUICK TIPS

    Top 5 % time: 12: 22
    Do max of 7 thrusters unbroken even in set of 21, this will save your shoulders and your heart rate won’ t peak so high
    Steady pace on the burpees, step up and“ fall” down to burpees to save the energy
    `
}

wods[32] = {
    name: `17.1`,
    wod: `
    For Time

    10 Dumbbell Snatch 50 / 35 lbs
    15 Burpee Box Jump Overs 24 / 20″
    20 Dumbbell Snatch 50 / 35 lbs
    15 Burpee Box Jump Overs 24 / 20″
    30 Dumbbell Snatch 50 / 35 lbs
    15 Burpee Box Jump Overs 24 / 20″
    40 Dumbbell Snatch 50 / 35 lbs
    15 Burpee Box Jump Overs 24 / 20″
    50 Dumbbell Snatch 50 / 35 lbs
    15 Burpee Box Jump Overs 24 / 20″`,
    tips: `
    QUICK TIPS

    Top 5 % time: 15: 05
    Switch hands in the air on snatches
    Recover with slower pace on BBJO
    `
}

wods[33] = {
    name: `17.2`,
    wod: `
    12 Min AMRAP

    2 Rounds of:
    50 feet Dumbbell Walking Lunges 2× 50 / 35 lbs
    16 Toes to Bars
    8 Dumbbell Power Cleans 2× 50 / 35 lbs

    2 Rounds of:
    50 feet Dumbbell Walking Lunges 2× 50 / 35 lbs
    16 Bar Muscle Ups
    8 Dumbbell Power Cleans 2× 50 / 35 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 214 reps(4 rounds + 30 - ft lunges)
    Go unbroken on lunges
    Split TTB and Bar MU more than you need and recover there
    Do 7 power cleans, drop dumbbells, rest little, finish last clean and
    continue with lunges

    `
}

wods[34] = {
    name: ` 17.3`,
    wod: `
    Prior to 8: 00, complete:

    3 rounds of:
    6 Chest to Bar Pull Ups
    6 Squat Snatches 95 / 65 lbs
    Then, 3 rounds of:
        7 Chest to Bar Pull Ups
    5 Squat Snatches 135 / 95 lbs
    Prior to 12: 00, complete 3 rounds of:
        8 Chest to Bar Pull Ups
    4 Squat Snatches 185 / 135 lbs
    Same rules applies to other rounds, +4 minutes
    if you finish 3 rounds, +1 C2B and - 1 Squat Snatch, weight goes up to 225 / 155, 245 / 175 and 265 / 185 lbs`,
    tips: `
    QUICK TIPS

    Top 5 % score: 104 reps(8 rounds + 8 pull ups)
    Singles on snatches(even with 95 lbs)
    Small sets on C2B pull ups
    This will allow you to be more consistent and save the energy
    for heavier weights

    `
}

wods[35] = {
    name: ` 17.4`,
    wod: `
    13 Min AMRAP

    55 Deadlifts 225 / 155 lbs
    55 Wall Balls 20 / 14 lbs
    55 cal Row
    55 HSPU`,
    tips: `
    QUICK TIPS

    Top 5 % score: 205 reps(40 HSPU)
    Split deadlifts as much as you can, even 11 sets of 5 is good strategy to save energy for rest of the AMRAP
    On wall balls go for large set and a few small sets like 30 + 7 + 7 + 11 or for many small sets like the deadlifts(11× 5)
    Get on the rower ASAP and row with steady pace, you should be able to maintain 1200 cal / hr if you want to reach top 5 %
    Split HSPU to many small sets with minimal rest, do only about 25 % of your max rep set in the first set
    `
}

wods[36] = {
    name: ` 17.5`,
    wod: `
    10 Rounds of

    9 Thrusters 95 / 65 lbs
    35 DUs`,
    tips: `
    QUICK TIPS

    Top 5 % time: 11: 11
    Do thrusters unbroken only if you aim for time under 9: 00 otherwise go for 5 + 4 with a quick rest
    Rest in thrusters will allow you to minimize transition before / after DUs
    Stay focused on DUs
    `
}

wods[37] = {
    name: ` 18.1`,
    wod: `
    20 Min AMRAP

    18 toes - to - bars
    10 dumbbell hang clean and jerks
    14 - cal.row`,
    tips: `
    QUICK TIPS

    Top 5 % score: 11 rounds + 11 reps
    Split TTB to + 3 sets
    Unbroken on hang clean jerks
    About 1200 cal / hr at row Fight against the clock, same pace for all rounds
    `
}

wods[38] = {
    name: ` 18.2`,
    wod: `
    In 12  min Time Cap:

    1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 reps
    Dumbbell squats
    Bar - facing burpees

    If first completed in less than 12 mins:
    1 - rep - max clean`,
    tips: `
    QUICK TIPS

    Top 5 % score: 6: 00
    First half is of WOD is 1… 7, pace accordingly
    It is worth to do all sets unbroken but make sure to not rush too much at the beginning
    Quick transitions in first 3 sets
    Start your 1 RM clean with 90 % of current 1 RM
    `
}

wods[39] = {
    name: ` 18.3`,
    wod: `
    2 rounds for time of:

    100 double - unders
    20 overhead squats
    100 double - unders
    12 ring muscle - ups
    100 double - unders
    20 dumbbell snatches
    100 double - unders
    12 bar muscle - ups
    Men perform 115 - lb.OHS, 50 - lb.DB snatches
    Time cap: 14 minutes`,
    tips: `
    QUICK TIPS

    Top 5 % score: 1 rounds + 100 DU + 10 OHS
    DUs are main sticking point here
    Better to do 40 + 30 + 30 then failing in later rounds
    You can also split other movements to 2 - 3 sets
    `
}

wods[40] = {
    name: ` 18.4`,
    wod: `
    For time:

    21 deadlifts, 225 lb.
    21 handstand push - ups
    15 deadlifts, 225 lb.
    15 handstand push - ups
    9 deadlifts, 225 lb.
    9 handstand push - ups
    21 deadlifts, 315 lb.
    50 - ft.handstand walk
    15 deadlifts, 315 lb.
    50 - ft.handstand walk
    9 deadlifts, 315 lb.
    50 - ft.handstand walk
    Time cap: 9 min.`,
    tips: `
    QUICK TIPS

    Top 5 % score: 114 reps(last handstand walk 15 feet)
    Split deadlifts as much as you can, especially first rounds with lighter weights
    Short distance burts on handstand walks will be much faster than full unbroken distances
    `
}

wods[41] = {
    name: ` 18.5`,
    wod: `
    7 Min AMRAP

    3 - 6 - 9 - …thrusters 100 lbs
    3 - 6 - 9 - …chest - to - bar pull - ups`,
    tips: `
    QUICK TIPS

    Top 5 % time: 13 pull ups in round of 18 s
    Do max of 6 thrusters in set, always drop the bar, reset quickly and pick it up again
    Small sets on C2B, even sets of 3 reps should work great
    `
}

wods[42] = {
    name: ` 19.1`,
    wod: `
    Complete as many rounds as possible in 15 minutes of

    19 wall - ball shots
    19 - cal.row
    M 20 - lb.wall ball to 10 ft.
    W 14 - lb.wall ball to 9 ft.
    `,
    tips: `
    TBA
    `
}

wods[43] = {
    name: ` 19.2`,
    wod: `
    Beginning on an 8 - minute clock, complete as many reps as possible of:

    25 toes - to - bars
    50 double - unders - 15 squat cleans, 135 / 85 lb.
    25 toes - to - bars
    50 double - unders
    13 squat cleans, 185 / 115 lb.

    If completed before 8 minutes, add 4 minutes to the clock and proceed to:

    25 toes - to - bars
    50 double - unders
    11 squat cleans, 225 / 145 lb.

    If completed before 12 minutes, add 4 minutes to the clock and proceed to:

    25 toes - to - bars
    50 double - unders
    9 squat cleans, 275 / 175 lb.

    If completed before 16 minutes, add 4 minutes to the clock and proceed to:

    25 toes - to - bars
    50 double - unders
    7 squat cleans, 315 / 205 lb.
    `,
    tips: `
    TBA
    `
}

wods[44] = {
    name: ` 19.3`,
    wod: `
    For time:

    200 - ft.dumbbell overhead lunge
    50 dumbbell box step - ups
    50 strict handstand push - ups
    200 - ft.handstand walk
    Men 50 - lb.dumbbell / 24 - in .box
    Women 35 - lb.dumbbell / 20 - in .box
    `,
    tips: `
    TBA
    `
}

wods[45] = {
    name: ` 19.4`,
    wod: `
    For total time:

    3 rounds of:

    10 snatches
    12 bar - facing burpees
    Rest 3 minutes

    Then, 3 rounds of:

    10 bar muscle - ups
    12 bar - facing burpees
    Men 95 lb.
    Women 65 lb.
    `,
    tips: `
    TBA
    `
}

wods[46] = {
    name: ` 19.5`,
    wod: `
    33 - 27 - 21 - 15 - 9 reps

    for time of:

    Thrusters
    Chest - to - bar pull - ups
    Men 95 lb.
    Women 65 lb.
    `,
    tips: `
    TBA
    `
}

wods[47] = {
    name: ` 20.1`,
    wod: `
    10 rounds

    for time of:
    8 ground - to - overheads, 95 lb.
    10 bar - facing burpees

    Time cap: 15 minutes
    `,
    tips: `
    TBA
    `
}

wods[48] = {
    name: `20.2`,
    wod: `
    Complete as many rounds as possible in 20 minutes of:
    
    4 dumbbell thrusters
    6 toes - to - bars
    24 double - unders

    50 - lb.dumbbells
    `,
    tips: `
    TBA 
    `
}

wods[49] = {
    name: `20.3`,
    wod: `
    For time:
    
    21 deadlifts, 225 lb.
    21 handstand push - ups
    15 deadlifts, 225 lb.
    15 handstand push - ups
    9 deadlifts, 225 lb.
    9 handstand push - ups
    21 deadlifts, 315 lb.
    50 - ft.handstand walk
    15 deadlifts, 315 lb.
    50 - ft.handstand walk
    9 deadlifts, 315 lb.
    50 - ft.handstand walk

    Time cap: 9 min.
    `,
    tips: `
    TBA 
    `
}

wods[50] = {
    name: `20.4`,
    wod: `
    For time:
    
    30 box jumps, 24 in .
    15 clean and jerks, 95 lb.
    30 box jumps, 24 in .
    15 clean and jerks, 135 lb.
    30 box jumps, 24 in .
    10 clean and jerks, 185 lb.
    30 single - leg squats
    10 clean and jerks, 225 lb.
    30 single - leg squats
    5 clean and jerks, 275 lb.
    30 single - leg squats
    5 clean and jerks, 315 lb.

    Time cap: 20 minutes
    `,
    tips: `
    TBA `

}

wods[51] = {
    name: `20.5`,
    wod: `
    For time, partitioned any way:

    40 muscle - ups
    80 - cal.row
    120 wall - ball shots, 20 - lb.ball to 10 ft.

    Time cap: 20 min.
    `,
    tips: `
    TBA 
    `
}

wods[52] = {
    name: `21.1`,
    wod: `
    For time:

    1 wall walk
    10 double - unders
    3 wall walks
    30 double - unders
    6 wall walks
    60 double - unders
    9 wall walks
    90 double - unders
    15 wall walks
    150 double - unders
    21 wall walks
    210 double - unders

    Time cap: 15 min.
    `,
    tips: `
    TBA 
    `
}

wods[53] = {
    name: `21.2`,
    wod: `
    For time:

    10 dumbbell snatches
    15 burpee box jump - overs
    20 dumbbell snatches
    15 burpee box jump - overs
    30 dumbbell snatches
    15 burpee box jump - overs
    40 dumbbell snatches
    15 burpee box jump - overs
    50 dumbbell snatches
    15 burpee box jump - overs

    50 - lb.dumbbell, 24 - in .box

    Time cap: 20 min.
    `,
    tips: `
    TBA 
    `
}

wods[54] = {
    name: `21.3`,
    wod: `
    For total time:

    15 front squats
    30 toes - to - bars
    15 thrusters

    Then, rest 1 minute before continuing with:

    15 front squats
    30 chest - to - bar pull - ups
    15 thrusters

    Then, rest 1 minute before continuing with:

    15 front squats
    30 bar muscle - ups
    15 thrusters

    Workout 21.4 begins immediately upon completing or reaching the time cap
    for 21.3.

    95 lb.for the front squats and thrusters

    Time cap: 15 min.

    Complete the following complex for max load:

    1 deadlift
    1 clean
    1 hang clean
    1 jerk
    `,
    tips: `
    TBA 
    `
}

wods[55] = {
    name: `22.1`,
    wod: `
    Complete as many rounds as possible in 15 minutes of:

    3 wall walks
    12 dumbbell snatches
    15 box jump-overs
    
    50-lb dumbbell, 24-in box
    `,
    tips: ``
}

wods[56] = {
    name: `22.2`,
    wod: `
    1-2-3-4-5-6-7-8-9-10-9-8-7-6-5-4-3-2-1 reps for time of:

    Deadlifts
    Bar-facing burpees

    225-lb barbell

    Time cap: 10 minutes
    `,
    tips: ``
}

wods[57] = {
    name: `22.3`,
    wod: `For time:
    21 pull-ups
    42 double-unders
    21 thrusters (weight 1)
    18 chest-to-bar pull-ups
    36 double-unders
    18 thrusters (weight 2)
    15 bar muscle-ups
    30 double-unders
    15 thrusters (weight 3)
    
    95 lb, then 115 lb, then 135 lb
    
    Time cap: 12 minutes`,
    tips: ``
}

function BuildArray(size) {
    this.length = size
    for (let i = 1; i <= size; i++) {
        this[i] = null
    }
    return this;
}

function PickRandomWod(frm) {
    // Generate a random number between 1 and NumberOfWods
    let rnd = Math.ceil(Math.random() * NumberOfWods)

    //display wods inside div
    document.getElementById("WodName").textContent = wods[rnd].name;
    document.getElementById("WodWod").innerHTML = wods[rnd].wod.replace(/(\r\n|\n|\r)/gm, "<br>");
    document.getElementById("WodTips").innerHTML = wods[rnd].tips;
}