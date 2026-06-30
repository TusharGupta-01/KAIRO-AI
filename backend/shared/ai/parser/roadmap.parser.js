// const parseRoadmap = (responseText) => {
//   // Parsing
//   const match = responseText.match(/<JSON_START>([\s\S]*?)<JSON_END>/);

//   if (!match) {
//     throw new Error("No JSON found.");
//   }
//   let roadmap;
//   try {
//     roadmap = JSON.parse(match[1].trim());
//   } catch {
//     throw new Error("AI returned invalid JSON.");
//   }
//   // Validation

//   if (!roadmap.roadmapTitle) {
//     throw new Error("Roadmap title missing.");
//   }

//   if (!roadmap.summary) {
//     throw new Error("Roadmap summary missing.");
//   }

//   if (!Array.isArray(roadmap.days)) {
//     throw new Error("Roadmap days missing.");
//   }

//   if (roadmap.days.length === 0) {
//     throw new Error("Roadmap is empty.");
//   }
//   if (roadmap.days.length !== 30) {
//   throw new Error("Roadmap must contain exactly 30 days.");
// }

//   for (const day of roadmap.days) {
//     if (!day.day) throw new Error("Day number missing.");

//     if (!day.title) throw new Error(`Day ${day.day}: Title missing.`);

//     if (!day.description)
//       throw new Error(`Day ${day.day}: Description missing.`);

//     if (!day.duration) throw new Error(`Day ${day.day}: Duration missing.`);

//     if (!day.difficulty) throw new Error(`Day ${day.day}: Difficulty missing.`);

//     if (!Array.isArray(day.resources))
//       throw new Error(`Day ${day.day}: Resources missing.`);
//   }

//   return roadmap;
// };

// module.exports = {
//   parseRoadmap,
// };


const parseRoadmap = (responseText) => {
  // -----------------------------
  // Extract JSON
  // -----------------------------
  const match = responseText.match(
    /<JSON_START>([\s\S]*?)<JSON_END>/
  );

  if (!match) {
    throw new Error("No JSON found.");
  }

  let roadmap;

  try {
    roadmap = JSON.parse(match[1].trim());
  } catch {
    throw new Error("AI returned invalid JSON.");
  }

  // -----------------------------
  // Basic Validation
  // -----------------------------

  if (roadmap.error) {
    throw new Error(roadmap.error);
  }

  if (!roadmap.roadmapTitle) {
    throw new Error("Roadmap title missing.");
  }

  if (!roadmap.summary) {
    throw new Error("Roadmap summary missing.");
  }

  // -----------------------------
  // Student Analysis Validation
  // -----------------------------

  if (!roadmap.studentAnalysis) {
    throw new Error("Student analysis missing.");
  }

  const analysis = roadmap.studentAnalysis;

  if (!analysis.currentLevel) {
    throw new Error("Current level missing.");
  }

  if (!Array.isArray(analysis.strengths)) {
    throw new Error("Strengths missing.");
  }

  if (!Array.isArray(analysis.knowledgeGaps)) {
    throw new Error("Knowledge gaps missing.");
  }

  if (!Array.isArray(analysis.priorityFocus)) {
    throw new Error("Priority focus missing.");
  }

  if (!analysis.estimatedPlacementReadiness) {
    throw new Error("Placement readiness missing.");
  }

  // -----------------------------
  // Roadmap Validation
  // -----------------------------

  if (!Array.isArray(roadmap.days)) {
    throw new Error("Roadmap days missing.");
  }

  if (roadmap.days.length !== 30) {
    throw new Error("Roadmap must contain exactly 30 days.");
  }

  // -----------------------------
  // Validate Every Mission
  // -----------------------------

  for (const day of roadmap.days) {
    if (!day.day) {
      throw new Error("Day number missing.");
    }

    if (!day.mission) {
      throw new Error(`Day ${day.day}: Mission missing.`);
    }

    if (!day.why) {
      throw new Error(`Day ${day.day}: Why missing.`);
    }

    if (!Array.isArray(day.tasks)) {
      throw new Error(`Day ${day.day}: Tasks missing.`);
    }

    if (!day.deliverable) {
      throw new Error(`Day ${day.day}: Deliverable missing.`);
    }

    if (!day.careerImpact) {
      throw new Error(`Day ${day.day}: Career impact missing.`);
    }

    if (!day.estimatedTime) {
      throw new Error(`Day ${day.day}: Estimated time missing.`);
    }

    if (!Array.isArray(day.resources)) {
      throw new Error(`Day ${day.day}: Resources missing.`);
    }

    if (typeof day.completed !== "boolean") {
      throw new Error(`Day ${day.day}: Completed must be boolean.`);
    }
  }

  // -----------------------------
  // Final Goal Validation
  // -----------------------------

  if (!roadmap.finalGoal) {
    throw new Error("Final goal missing.");
  }

  if (!Array.isArray(roadmap.finalGoal.expectedSkills)) {
    throw new Error("Expected skills missing.");
  }

  if (!Array.isArray(roadmap.finalGoal.expectedProjects)) {
    throw new Error("Expected projects missing.");
  }

  if (!Array.isArray(roadmap.finalGoal.readyFor)) {
    throw new Error("ReadyFor missing.");
  }

  return roadmap;
};

module.exports = {
  parseRoadmap,
};