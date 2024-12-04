interface Question {
  question: string;
  imageUrl?: string;
  choices: string[];
  correctAnswer: string;
}

const questionsA: Question[] = [
  {
    question: "You may NOT stop your vehicle ...",
    choices: [
      "When a traffic officer instructs you to do so",
      "Within 6 meters of any bridge or tunnel",
      "When a passenger asks you to",
      "If your vehicle brakes fail",
    ],
    correctAnswer: "Within 6 meters of any bridge or tunnel",
  },
  {
    question: "What is your responsibility as the driver of the vehicle?",
    choices: [
      "Ensure everyone is seated",
      "Ensure everyone is wearing a seatbelt",
      "Drink energy drink before driving",
      "Ensure everyone's windows are open",
    ],
    correctAnswer: "Ensure everyone is wearing a seatbelt",
  },
  {
    question:
      "What is the minimum following distance for light motor vehicles?",
    choices: ["1 second", "2 seconds", "3.5 seconds", "5 seconds"],
    correctAnswer: "2 seconds",
  },
  {
    question: "What is the general  rule of the road in South Africa?",
    choices: [
      "You must be 21 to obtain a driver license",
      "Drive at 60 km/h",
      "Always drive on the left side of the road",
      "Do not reverse on a public road",
    ],
    correctAnswer: "Always drive on the left side of the road",
  },
  {
    question:
      "The South African Bureau of Standards (SABS) approve that a number plate should ...\n\n(i) Be affixed in such a manner that each figure is clearly discernable\n(ii) Be affixed in an upright position or within 30 degrees of such a position\n(iii) Have a high-contrasting background",
    choices: ["(i) and (ii)", "(i)", "(ii)", "All of the above"],
    correctAnswer: "(i) and (ii)",
  },
  {
    question:
      "A light/heavy motor vehicle should NOT be used on a public road carrying goods that project ...",
    choices: [
      "Less than 1.8 centimeters to the left end",
      "More than 1.8 meters to the back end",
      "More than 10 meters to the front end",
      "More than 30 centimeters to the right end",
    ],
    correctAnswer: "More than 1.8 meters to the back end",
  },
  {
    question: "When you change lanes, you should ensure that ...",
    choices: [
      "You change lanes whenever you feel like",
      "You hand signal other drivers before you do",
      "You are in a no-overtaking zone",
      "Change lanes only when it's safe (no danger)",
    ],
    correctAnswer: "Change lanes only when it's safe (no danger)",
  },
  {
    question:
      "When on a public road, you are NOT allowed to park your vehicle ...",
    choices: [
      "Near a school",
      "1.5 meters on the same side as a fire hydrant",
      "Near a tree",
      "5 meters from a police station",
    ],
    correctAnswer: "1.5 meters on the same side as a fire hydrant",
  },
  {
    question:
      "Within an urban area, you may NOT leave your vehicle abandoned for more than ...",
    choices: ["3 Days", "7 Days", "14 Days", "30 Days"],
    correctAnswer: "7 Days",
  },
  {
    question: "Your vehicle headlights must be switched on ...",
    choices: [
      "When raining, if visibility is under 100m",
      "When visibility is under 150m anytime",
      "From sunset to sunrise",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "You are expected to wear seat belts ...",
    choices: [
      "Whenever you are driving on the road",
      "When you are parking",
      "Once the vehicle is stationary",
      "None of the above",
    ],
    correctAnswer: "Whenever you are driving on the road",
  },
  {
    question: "A towed vehicle ...",
    choices: [
      "Must stay under 1.5m from tow vehicle",
      "May be towed over 30km/h with tow bar",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: "May be towed over 30km/h with tow bar",
  },
  {
    question: "At a traffic circle ...",
    choices: [
      "Yield to vehicles on your right",
      "Yield to vehicles on your left",
      "Proceed as if it were a 4-way stop",
      "None of the above",
    ],
    correctAnswer: "Yield to vehicles on your right",
  },
  {
    question: "The speed limit on a freeway is ...",
    choices: [
      "160 km/h",
      "140 km/h",
      "120 km/h",
      "100 hm/h",
    ],
    correctAnswer: "120 km/h",
  },
  {
    question: "You may NOT pass another vehicle ...",
    choices: [
      "On a solid white line",
      "In a tunnel",
      "When vision is blocked 100m ahead",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "You may ...",
    choices: [
      "Allow someone to ride on the bumper",
      "Extend your arm out the window to signal",
      "Leave your engine running unsupervised",
      "None of the above",
    ],
    correctAnswer: "Extend your arm out the window to signal",
  },
  {
    question: "What is the minimum tire tread depth that is legally allowed?",
    choices: [
      "0.85mm over the whole surface",
      "1mm over the whole surface",
      "0.75 over the whole surface",
      "1.25 over the whole surface",
    ],
    correctAnswer: "1mm over the whole surface",
  },
  {
    question: "What is the maximum period of time a vehicle may be parked in one place on a road outside of an urban area?",
    choices: [
      "7 days",
      "48 hours",
      "24 hours",
      "14 days",
    ],
    correctAnswer: "24 hours",
  },
  {
    question: "The maximum distance between a vehicle and towing vehicle is ...",
    choices: [
      "1.8 meters",
      "3.5 meters",
      "2.5 meters",
      "2 meters",
    ],
    correctAnswer: "3.5 meters",
  },
  {
    question: "When turning at an intersection ...",
    choices: [
      "Yield to oncoming traffic when turning right",
      "You have right of way when turning right",
      "Stop even with a flashing green arrow",
      "Overtake only when turning right",
    ],
    correctAnswer: "Yield to oncoming traffic when turning right",
  },
  {
    question: "If you have a learners license for a light motor vehicle ...",
    choices: [
      "No passengers are allowed in the vehicle",
      "Same license holder must be present",
      "Driving on the freeway is prohibited",
      "All of the above",
    ],
    correctAnswer: "Same license holder must be present",
  },
  {
    question: "Your dimmed lights may not strike the road surface further than ...",
    choices: [
      "45 meters",
      "100 meters",
      "150 meters",
      "165 meters",
    ],
    correctAnswer: "45 meters",
  },
  {
    question: "It is illegal when you drive and a passenger ...",
    choices: [
      "Fiddle with the motor radio's volume knob",
      "Rides on the bumper of your vehicle",
      "Sits behind you when you have a learners license",
      "All of the above",
    ],
    correctAnswer: "Rides on the bumper of your vehicle",
  },
  {
    question: "You may on a public road ...",
    choices: [
      "Not pass any vehicle on the left-hand side",
      "Pass right-turning vehicles left, off shoulder",
      "Pass left if the vehicle turns right",
      "None of the above",
    ],
    correctAnswer: "Pass right-turning vehicles left, off shoulder",
  },
  {
    question: "At an intersection ...",
    choices: [
      "Vehicles have right of way over pedestrians",
      "You can use a stop sign as a yield",
      "Yield to oncoming traffic before turning right",
      "None of the above",
    ],
    correctAnswer: "Yield to oncoming traffic before turning right",
  },
  {
    question: "The license (clearance certificate) of your vehicle is valid for ...",
    choices: [
      "90 days",
      "21 days",
      "5 months",
      "12 months",
    ],
    correctAnswer: "12 months",
  },
  {
    question: "What is important regarding the hooter of you vehicle?",
    choices: [
      "The tone of pitch may not change",
      "Persons must be able to hear 45m away",
      "Use it to attract pickup attention",
      "All of the above",
    ],
    correctAnswer: "The tone of pitch may not change",
  },
  {
    question: "Where is it legal to stop your vehicle?",
    choices: [
      "6m from a level crossing",
      "4m from a tunnel",
      "5m from a pedestrian crossing",
      "1m from a fire hydrant",
    ],
    correctAnswer: "6m from a level crossing",
  },
  {
    question: "You are not allowed to stop ...",
    choices: [
      "Next to any obstruction in the road",
      "On the pavement",
      "Front of your vehicle faces oncoming traffic",
      "All of the above",
    ],
    correctAnswer: "Front of your vehicle faces oncoming traffic",
  },
  {
    question: "When are you allowed to drive on the right-hand side of a road with traffic in both directions?",
    choices: [
      "When you turn on your emergency lights",
      "Under no circumstance",
      "When a traffic officer orders you to do so",
      "None of the above",
    ],
    correctAnswer: "When a traffic officer orders you to do so",
  },
  {
    question: "You are permitted to use hand signals on the freeway when ...",
    choices: [
      "You are unhappy with the flow of traffic",
      "Hand signals are not allowed on the freeway",
      "Signaling to attract a traffic officer's attention",
      "You are unsure if your indicators are working",
    ],
    correctAnswer: "Hand signals are not allowed on the freeway",
  },
];

const questionsB: Question[] = [
  {
    question: "You come across this road marking on the roadway ...",
    imageUrl: "/DIntersection.png",
    choices: [
      "Give right of way to other traffic",
      "Look out for pedestrians",
      "Follow the route in the intersection",
      "Don't follow the route in the intersection",
    ],
    correctAnswer: "Follow the route in the intersection",
  },
  {
    question:
      "This command sign informs you that this part of the road may only be used by ...",
    imageUrl: "/Lightmotor-only.png",
    choices: [
      "Heavy motor vehicles only",
      "Motorcycles only",
      "Light motor vehicles only",
      "All vehicles except abnormal vehicles",
    ],
    correctAnswer: "Light motor vehicles only",
  },
  {
    question: "Warning sign S5 shows you that ...",
    imageUrl: "/low-water-bridge.png",
    choices: [
      "There is a low water bridge ahead",
      "The road ends because of water ahead",
      "The road might be flooded ahead",
      "There are puddles in the road ahead",
    ],
    correctAnswer: "There is a low water bridge ahead",
  },
  {
    question: "This road sign warns you of ...",
    imageUrl: "/motor-gate-right.png",
    choices: [
      "A motor gate to the left ahead",
      "A motor gate to the right ahead",
      "A motor gate in the middle of the road",
      "A motor gate on both sides of the road",
    ],
    correctAnswer: "A motor gate to the left ahead",
  },
  {
    question: "When you encounter the following, what do you do?",
    imageUrl: "/flag-warning.png",
    choices: [
      "Stop and only drive when it's safe",
      "Proceed slowly and be alert",
      "Yield to the pedestrian on the road",
      "Be on the lookout for pedestrians",
    ],
    correctAnswer: "Proceed slowly and be alert",
  },
  {
    question: "This road sign informs you of an ... ahead",
    imageUrl: "/Arrestor-bed-left.png",
    choices: ["Arrestor bed", "Gas station", "Oil station", "Fire station"],
    correctAnswer: "Arrestor bed",
  },
  {
    question: "What is the purpose of the following road sign?",
    imageUrl: "/railway.png",
    choices: [
      "To warn the driver of a train station ahead",
      "To warn the driver of a bus station ahead",
      "To warn the driver of a railway crossing ahead",
      "To warn the driver of a trolly station ahead",
    ],
    correctAnswer: "To warn the driver of a railway crossing ahead",
  },
  {
    question: "Road marking RTM1 in the sketch: Sketch 4 shows you that ...",
    imageUrl: "/rtm1.png",
    choices: [
      "If you are driving car A, you stop at the line",
      "If you are car A, reduce speed and drive on",
      "If you are car B you may pass car A",
      "If you are car B you may ran into car A",
    ],
    correctAnswer: "If you are driving car A, you stop at the line",
  },
  {
    question: "This sign informs motorists to ...",
    imageUrl: "/yield.png",
    choices: [
      "Give way to traffic on your left",
      "Give way to traffic on your right",
      "Stop, give way to approaching traffic",
      "Slow down, give way to approaching traffic",
    ],
    correctAnswer: "Slow down, give way to approaching traffic",
  },
  {
    question: "This sign illustrates ...",
    imageUrl: "/IN5.png",
    choices: [
      "No turning right ahead",
      "There is a T-junction to the right ahead",
      "The road turning right is ending ahead",
      "Turn right only ahead",
    ],
    correctAnswer: "The road turning right is ending ahead",
  },
  {
    question: "This sign warns you of ...",
    imageUrl: "/uneven-roadway.png",
    choices: [
      "A river bank ahead",
      "Uneven roadway ahead",
      "Speed bumps ahead",
      "Watery road ahead",
    ],
    correctAnswer: "Uneven roadway ahead",
  },
  {
    question: "This sign indicates ...",
    imageUrl: "/IN7.png",
    choices: [
      "Other vehicles have right of way",
      "Engage in a lower gear",
      "You have right of way",
      "Reduce speed and proceed cautiously",
    ],
    correctAnswer: "You have right of way",
  },
  {
    question: "This sign warns motorists of ...",
    imageUrl: "/side-road-junction.png",
    choices: [
      "A side-road junction ahead",
      "A two-way stop ahead",
      "A cul-de-sac ahead",
      "The beginning of a dual-carriage way ahead",
    ],
    correctAnswer: "A side-road junction ahead",
  },
  {
    question: "This sign informs you of ...",
    imageUrl: "/dual-carriageway.png",
    choices: [
      "The end of a dual-carriageway",
      "The beginning of a dual-carriageway",
      "The beginning of a single-carriageway",
      "The beginning of a new freeway",
    ],
    correctAnswer: "The beginning of a dual-carriageway",
  },
  {
    question: "This sign shows that ...",
    imageUrl: "/10t-regulatory.png",
    choices: [
      "No large vehicles may drive here",
      "Vehicles under 10 tons can't drive here",
      "Vehicles under 10 tons can drive here",
      "None of the above",
    ],
    correctAnswer: "Vehicles under 10 tons can't drive here",
  },
  {
    question: "What does the following sign inform motorists of ...",
    imageUrl: "/hairpin.png",
    choices: [
      "A sharp curve ahead",
      "A winding road ahead",
      "A steep road ahead",
      "A hairpin bend ahead",
    ],
    correctAnswer: "A hairpin bend ahead",
  },
  {
    question: "This sign informs motorists ...",
    imageUrl: "/50-regulatory.png",
    choices: [
      "This is the slowest speed they may drive",
      "They may not exceed 50km/h",
      "They must drive for 50km",
      "None of the above",
    ],
    correctAnswer: "This is the slowest speed they may drive",
  },
  {
    question: "This sign shows you that there is a ...",
    imageUrl: "/obstruction-left.png",
    choices: [
      "Obstruction to the left of the road",
      "Curve to the left ahead",
      "Detour to the right ahead",
      "Off-ramp to the right ahead",
    ],
    correctAnswer: "Obstruction to the left of the road",
  },
  {
    question: "This sign informs motorists that ...",
    imageUrl: "/left-lane-ends.png",
    choices: [
      "A new lane begins here",
      "The left lane ends here",
      "A single carriageway begins here",
      "The road separates to the right ahead",
    ],
    correctAnswer: "The left lane ends here",
  },
  {
    question: "This sign informs you that you are approaching a ...",
    imageUrl: "/dual-railway-crossing.png",
    choices: [
      "Crossroads ahead",
      "Dual-railway crossing ahead",
      "Dead-end ahead",
      "Single-railway crossing ahead",
    ],
    correctAnswer: "Dual-railway crossing ahead",
  },
  {
    question: "This road sign informs you that you ...",
    imageUrl: "/straight-only.png",
    choices: [
      "Must only drive straight on",
      "Will encounter a one-way road ahead",
      "Will encounter a tree ahead",
      "Must only proceed right",
    ],
    correctAnswer: "Must only drive straight on",
  },
  {
    question: "This road sign illustrates ...",
    imageUrl: "/concealed-l-r.png",
    choices: [
      "You should keep to the right of the road",
      "Expect uneven road ahead",
      "Expect concealed driveways left, then right",
      "Expect slippery road ahead",
    ],
    correctAnswer: "Expect concealed driveways left, then right",
  },
  {
    question: "Marking BB8 shows you that only ... may park there",
    imageUrl: "/MB_Marking.png",
    choices: [
      "Minibuses",
      "Motorcycles",
      "Taxis",
      "Municipal buses",
    ],
    correctAnswer: "Minibuses",
  },
  {
    question: "Sigh N8 shows you that there ...",
    imageUrl: "/two-way-traffic.png",
    choices: [
      "Are two lanes ahead in different directions",
      "Two-way road crosses the road ahead",
      "Two-way road ahead on your one-way road",
      "None of the above",
    ],
    correctAnswer: "Two-way road ahead on your one-way road",
  },
  {
    question: "Sign Q10 warns you about ...",
    imageUrl: "/speed-bump.png",
    choices: [
      "The road is uneven",
      "There are speed humps on the road",
      "There are potholes in the road",
      "There are puddles in the road",
    ],
    correctAnswer: "There are speed humps on the road",
  },
  {
    question: "Warning sign Q4 shows you that..",
    imageUrl: "/gravel-begins.png",
    choices: [
      "You will get potholes on the road ahead",
      "Your road ahead becomes a gravel road",
      "The road ahead ends",
      "The road ahead is uneven",
    ],
    correctAnswer: "Your road ahead becomes a gravel road",
  },
  {
    question: "Sign G9 shows you that ...",
    imageUrl: "/car-park.png",
    choices: [
      "You must use that part of the road",
      "You may use that part of the road",
      "There is parking for motor cars there",
      "Light motor vehicles may use that part",
    ],
    correctAnswer: "There is parking for motor cars there",
  },
  {
    question: "Sign A2 shows you that you must ...",
    imageUrl: "/stop-left.png",
    choices: [
      "Stop, or yield if turning left",
      "Stop, then turn left or go straight",
      "Turn left at the stop sign",
      "You must stop and must turn left",
    ],
    correctAnswer: "Stop, or yield if turning left",
  },
  {
    question: "Sign K3 shows you that you ...",
    imageUrl: "/no-drive-time.png",
    choices: [
      "Driving prohibited from 06:00 to 09:00",
      "Allowed to drive only 06:00-09:00",
      "May not park there for more than 3 hours",
      "No entry during the specified times",
    ],
    correctAnswer: "Driving prohibited from 06:00 to 09:00",
  },
  {
    question: "Arrow E in the sketch booklet, sketch 5, shows you that you ...",
    imageUrl: "/sketch5.png",
    choices: [
      "Can change lanes if you want to proceed straight",
      "Must turn right from the lane",
      "You can turn right or proceed straight if it is safe",
      "You can turn right if you want to",
    ],
    correctAnswer: "Must turn right from the lane",
  },
];

const questionsC: Question[] = [
  {
    question: "Which control is not found in an automatic vehicle?",
    imageUrl: "/Lightmotor.png",
    choices: ["6", "8", "9", "5"],
    correctAnswer: "8",
  },
  {
    question: "Control no 8 is used to ...",
    imageUrl: "/Lightmotor.png",
    choices: [
      "Check for incoming traffic",
      "Signal other drivers",
      "Change gears",
      "Stop the car",
    ],
    correctAnswer: "Change gears",
  },
  {
    question:
      "The following control is used to change the direction of the vehicle:",
    imageUrl: "/Lightmotor.png",
    choices: ["6", "5", "1", "4"],
    correctAnswer: "4",
  },
  {
    question:
      "To increase and decrease the speed of the vehicle, the following control is used:",
    imageUrl: "/Lightmotor.png",
    choices: ["6", "10", "9", "7"],
    correctAnswer: "10",
  },
  {
    question: "To indicate that you are going to turn you must use number ...",
    imageUrl: "/Lightmotor.png",
    choices: ["4", "3", "5", "1"],
    correctAnswer: "5",
  },
  {
    question: "To select a gear, you must use numbers ...",
    imageUrl: "/Lightmotor.png",
    choices: ["8 and 9", "6 and 10", "6 and 8", "7 and 8"],
    correctAnswer: "6 and 8",
  },
  {
    question:
      "When control number 9 is used, the distance it takes the driver of a motor vehicle to stop it is:\n\n(i) longer on a wet road than on a dry road.\n(ii) longer if the vehicle is travelling at a higher speed.\n(iii) longer if the vehicle is loaded.",
    imageUrl: "/Lightmotor.png",
    choices: ["(i)", "(ii) and (iii)", "(iii)", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question:
      "Which controls must you use when there is a sharp turn in the road?",
    imageUrl: "/Lightmotor.png",
    choices: [
      "1, 3, 4, 6, 8, 9 and 10 only",
      "1, 2, 4, 5, 6, 9 and 10 only",
      "4, 6, 7, 8 and 10 only",
      "1, 3, 4, 5, 6 and 10 only",
    ],
    correctAnswer: "1, 3, 4, 6, 8, 9 and 10 only",
  },
];

export function getQuestions(testType: string): Question[] {
  switch (testType) {
    case "A":
      return questionsA;
    case "B":
      return questionsB;
    case "C":
      return questionsC;
    default:
      return [];
  }
}
