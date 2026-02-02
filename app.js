import React, { useState } from 'react';
import { BookOpen, CheckCircle, Circle, Award, Play, FileText, Lightbulb, Users, Target, Brain, ChevronRight, ChevronDown, Star, Lock, Video, CheckSquare, Clock, TrendingUp } from 'lucide-react';

const ClassroomCropsTraining = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState({});
  const [expandedModules, setExpandedModules] = useState({});
  const [currentTab, setCurrentTab] = useState('overview');

  const markLessonComplete = (lessonId) => {
    setCompletedLessons(prev => ({...prev, [lessonId]: true}));
  };

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const calculateProgress = () => {
    const totalLessons = trainingModules.reduce((sum, mod) => sum + mod.lessons.length, 0);
    const completed = Object.keys(completedLessons).length;
    return Math.round((completed / totalLessons) * 100);
  };

  const trainingModules = [
    {
      id: 1,
      title: "Foundation: Understanding the Curriculum",
      icon: BookOpen,
      color: "bg-blue-500",
      description: "Master the pedagogical foundations and overall structure",
      lessons: [
        { id: "1-1", title: "Curriculum Philosophy & Learning Theory", duration: "20 min", type: "concept" },
        { id: "1-2", title: "Week-by-Week Overview & Pacing", duration: "25 min", type: "concept" },
        { id: "1-3", title: "Materials Management & Budget Planning", duration: "30 min", type: "practical" }
      ]
    },
    {
      id: 2,
      title: "Classroom Setup & Preparation",
      icon: Target,
      color: "bg-green-500",
      description: "Learn to create an effective growing environment",
      lessons: [
        { id: "2-1", title: "Physical Space Design & Safety", duration: "25 min", type: "practical" },
        { id: "2-2", title: "Pre-Course Preparation Checklist", duration: "20 min", type: "checklist" },
        { id: "2-3", title: "Building Classroom Culture", duration: "20 min", type: "concept" }
      ]
    },
    {
      id: 3,
      title: "Teaching Techniques & Strategies",
      icon: Brain,
      color: "bg-purple-500",
      description: "Master effective teaching methods for hands-on learning",
      lessons: [
        { id: "3-1", title: "The 'What to Say' Framework", duration: "30 min", type: "concept" },
        { id: "3-2", title: "Demonstration & Modeling Best Practices", duration: "25 min", type: "practical" },
        { id: "3-3", title: "Facilitating Student-Led Discovery", duration: "25 min", type: "concept" },
        { id: "3-4", title: "Differentiation Strategies for All Learners", duration: "30 min", type: "concept" }
      ]
    },
    {
      id: 4,
      title: "Week-by-Week Teaching Guide",
      icon: FileText,
      color: "bg-orange-500",
      description: "Detailed walkthrough of each lesson with tips and troubleshooting",
      lessons: [
        { id: "4-1", title: "Week 1: Seeds & Germination Teaching Guide", duration: "45 min", type: "practical" },
        { id: "4-2", title: "Week 2: Seedlings & Plant Health Teaching Guide", duration: "45 min", type: "practical" },
        { id: "4-3", title: "Week 3: Photosynthesis & Hydroponics Teaching Guide", duration: "45 min", type: "practical" },
        { id: "4-4", title: "Week 4: Reproduction & Life Cycles Teaching Guide", duration: "45 min", type: "practical" },
        { id: "4-5", title: "Week 5: Harvest & Nutrition Teaching Guide", duration: "45 min", type: "practical" },
        { id: "4-6", title: "Week 6: Optimization & Final Projects Teaching Guide", duration: "45 min", type: "practical" }
      ]
    },
    {
      id: 5,
      title: "Troubleshooting & Problem Solving",
      icon: Lightbulb,
      color: "bg-red-500",
      description: "Handle common challenges and unexpected situations",
      lessons: [
        { id: "5-1", title: "When Plants Die: Managing Failure Productively", duration: "20 min", type: "scenario" },
        { id: "5-2", title: "Student Behavior Challenges in Hands-On Learning", duration: "25 min", type: "scenario" },
        { id: "5-3", title: "Time Management & Pacing Adjustments", duration: "20 min", type: "practical" },
        { id: "5-4", title: "When Technology Fails (Lights, Pumps, etc.)", duration: "15 min", type: "scenario" }
      ]
    },
    {
      id: 6,
      title: "Assessment & Documentation",
      icon: CheckSquare,
      color: "bg-indigo-500",
      description: "Learn to evaluate student learning and document outcomes",
      lessons: [
        { id: "6-1", title: "Formative Assessment Strategies", duration: "25 min", type: "concept" },
        { id: "6-2", title: "Grading Authentic Work (Projects, Harvests)", duration: "30 min", type: "practical" },
        { id: "6-3", title: "Documenting Student Growth & Outcomes", duration: "20 min", type: "practical" }
      ]
    },
    {
      id: 7,
      title: "Advanced Topics & Expansion",
      icon: Award,
      color: "bg-yellow-500",
      description: "Take your teaching to the next level",
      lessons: [
        { id: "7-1", title: "Integrating with Other Subjects", duration: "30 min", type: "concept" },
        { id: "7-2", title: "Building a Year-Round Program", duration: "25 min", type: "practical" },
        { id: "7-3", title: "Student Teaching & Peer Mentoring", duration: "20 min", type: "concept" },
        { id: "7-4", title: "Community Partnerships & Outreach", duration: "25 min", type: "practical" }
      ]
    }
  ];

  const lessonContent = {
    "3-3": {
      overview: "Move from teacher-centered instruction to student-driven learning through strategic facilitation.",
      keyPoints: [
        "Ask questions instead of giving answers",
        "Strategic wait time (3-7 seconds)",
        "Follow student thinking, redirect gently",
        "Create cognitive dissonance to spark curiosity",
        "Socratic method for deeper understanding"
      ],
      detailedContent: `**The Shift from Telling to Asking:**

TRADITIONAL: "Plants need nitrogen for growth."

DISCOVERY-BASED:
Teacher: "Look at these two plants. What do you notice?"
Student: "This one is pale green, that one is dark green."
Teacher: "What might cause that difference?"
[Guide toward nutrient difference through investigation]

**Strategic Questioning Framework:**

LEVEL 1 - OBSERVATION: "What do you notice?"
LEVEL 2 - INTERPRETATION: "Why do you think this is happening?"
LEVEL 3 - APPLICATION: "How could we test that idea?"
LEVEL 4 - EVALUATION: "Which solution would work best?"

**Wait Time Mastery:**
Count to 7 slowly after asking a question.
Why this works: Gives thinking time, leads to deeper answers.

**Following Student Thinking:**
❌ "No, that's incorrect."
✅ "Interesting idea! What makes you think that? Let's test it."

**Creating Cognitive Dissonance:**
"You said plants need soil. But this plant is growing in water. How?"
The contradiction drives investigation!`,
      practiceActivity: `**PRACTICE SCENARIO:**

Student: "My plant is wilting because it needs water."
You check - soil is very wet.

Write a questioning sequence that guides them to discover overwatering:
1. "What makes you think it needs water?"
2. "Let's check the soil. What do you feel?"
3. "It's very wet. So why might it still be wilting?"
4. "What do roots need besides water?"
5. "Could too much water be a problem? Why?"`,
      teachingTips: [
        "Script your key questions in advance",
        "Practice wait time with someone timing you",
        "Video yourself and count actual wait time",
        "Keep a 'question bank' of great questions",
        "The one thinking is the one learning"
      ],
      commonMistakes: [
        "Asking too many questions too fast",
        "Answering your own questions when silent",
        "Only calling on students with hands raised",
        "Asking 'does that make sense?' instead of checking",
        "Leading questions with only one 'right' answer"
      ]
    },
    "3-4": {
      overview: "Teach effectively to diverse learners with varying abilities and backgrounds.",
      keyPoints: [
        "Universal Design for Learning (UDL) principles",
        "Scaffolding for struggling students",
        "Extensions for advanced students",
        "English Language Learner (ELL) support",
        "Multiple means of representation, expression, engagement"
      ],
      detailedContent: `**Universal Design for Learning:**

MULTIPLE MEANS OF:
1. REPRESENTATION: Visual, auditory, kinesthetic, text
2. EXPRESSION: Verbal, written, visual, kinesthetic
3. ENGAGEMENT: Choice, relevance, collaboration

**Scaffolding Techniques:**
• Break into smaller steps
• Provide worked examples
• Use graphic organizers
• Sentence frames: "I observe that _____ because _____"
• Word banks with visuals

**ELL Support:**
• Speak clearly, moderate pace
• Use gestures and visuals constantly
• Define all new vocabulary
• Label everything in growing space
• Allow more wait time

**Differentiation:**
STRUGGLING: More support, partners, simplified
ADVANCED: Extensions, research, teach others
ASSESSMENT: Multiple ways to demonstrate learning`,
      practiceActivity: `**PLAN FOR DIVERSITY:**

Photosynthesis lesson - plan for:
- Student A: Reading 2 years below, struggles with abstract
- Student B: Advanced, already knows it, gets bored
- Student C: English Language Learner, intermediate

For each: How you'll present, engage, and assess differently.`,
      teachingTips: [
        "Get to know students' needs in week 1",
        "Create 'differentiation toolkit' ready to go",
        "Document what works for each student",
        "Collaborate with special ed/ELL teachers",
        "Differentiation is fairness, not sameness"
      ],
      commonMistakes: [
        "Creating entirely separate lessons",
        "Only differentiating for struggling students",
        "Assuming all visual learners are the same",
        "Not challenging advanced students enough",
        "Forgetting to scaffold for all students"
      ]
    },
    "5-1": {
      overview: "Transform plant failures into powerful learning opportunities.",
      keyPoints: [
        "Normalize failure as part of growing",
        "Conduct 'plant autopsies' to investigate",
        "Document failures for future learning",
        "Build student resilience and growth mindset",
        "Extract maximum educational value"
      ],
      detailedContent: `**The Reality: Plants WILL Die**
Expect 20-30% to die. This is NORMAL and VALUABLE.

**Reframe Failure:**
❌ "You killed your plant"
✅ "This plant died. Let's investigate why."

**Plant Autopsy Protocol:**
1. GATHER EVIDENCE (10 min)
   - Examine roots, soil, review care log
2. CLASS INVESTIGATION (15 min)
   - Present evidence, generate hypotheses
3. EXTRACT LESSONS (10 min)
   - What mistake? How to catch earlier?
4. DOCUMENT & SHARE (5 min)
   - Add to "Lessons Learned" poster

**Build Resilience:**
"Every expert grower has killed hundreds of plants.
Each failure taught them something success couldn't."

**Growth Mindset:**
❌ "I can't grow plants"
✅ "I'm learning to grow plants"`,
      practiceActivity: `**SCENARIO:**
Student upset: "My plant died and I feel like a failure."

Write exactly what you'd say to:
1. Validate feelings
2. Shift to learning mode
3. Build resilience
4. Extract the lesson

Consider: How would this differ for a perfectionist vs. someone who gives up easily?`,
      teachingTips: [
        "Set expectation Day 1: 'Some plants will die'",
        "Model your own failures: 'I've killed hundreds!'",
        "Celebrate lessons learned like successes",
        "Take photos - failures become teaching tools",
        "Keep backup plants so students can retry"
      ],
      commonMistakes: [
        "Getting frustrated (your emotions set the tone)",
        "Rushing past failure without lessons",
        "Letting students think they're 'bad at this'",
        "Not documenting failures",
        "Avoiding talking about dead plants"
      ]
    }
  };

  const getTypeIcon = (type) => {
    const icons = { concept: Brain, practical: Target, checklist: CheckSquare, scenario: Lightbulb };
    return icons[type] || FileText;
  };

  const getTypeColor = (type) => {
    const colors = {
      concept: 'bg-purple-100 text-purple-700',
      practical: 'bg-green-100 text-green-700',
      checklist: 'bg-blue-100 text-blue-700',
      scenario: 'bg-orange-100 text-orange-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  const LessonDetailView = ({ lesson, moduleColor }) => {
    const content = lessonContent[lesson.id] || {
      overview: "Content for this lesson is being developed. Check back soon!",
      keyPoints: [],
      detailedContent: "Detailed content coming soon..."
    };
    
    return (
      <div className="space-y-6">
        <div className={`${moduleColor} text-white p-6 rounded-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
              <p className="opacity-90">{lesson.duration} • {lesson.type}</p>
            </div>
            <button
              onClick={() => markLessonComplete(lesson.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                completedLessons[lesson.id]
                  ? 'bg-white text-gray-800'
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white'
              }`}
            >
              {completedLessons[lesson.id] ? '✓ Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>

        <div className="flex gap-2 border-b">
          {['overview', 'content', 'practice', 'tips'].map(tab => (
            (tab !== 'practice' || content.practiceActivity) && (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-4 py-2 font-medium transition ${
                  currentTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          ))}
        </div>

        <div className="prose max-w-none">
          {currentTab === 'overview' && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">Learning Objectives</h3>
                <p className="text-gray-700">{content.overview}</p>
              </div>
              {content.keyPoints?.length > 0 && (
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Key Points</h3>
                  <ul className="space-y-2">
                    {content.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {currentTab === 'content' && (
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {content.detailedContent}
              </div>
            </div>
          )}

          {currentTab === 'practice' && content.practiceActivity && (
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
              <h3 className="text-lg font-semibold mb-4 text-yellow-900">Practice Activity</h3>
              <div className="whitespace-pre-wrap text-gray-700">
                {content.practiceActivity}
              </div>
            </div>
          )}

          {currentTab === 'tips' && (
            <div className="space-y-4">
              {content.teachingTips?.length > 0 && (
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Teaching Tips</h3>
                  <ul className="space-y-2">
                    {content.teachingTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">💡</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {content.commonMistakes?.length > 0 && (
                <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Common Mistakes</h3>
                  <ul className="space-y-2">
                    {content.commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">⚠️</span>
                        <span className="text-gray-700">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6 border-t">
          <button
            onClick={() => setSelectedLesson(null)}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition"
          >
            ← Back to Modules
          </button>
          <button
            onClick={() => markLessonComplete(lesson.id)}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
          >
            {completedLessons[lesson.id] ? 'Completed ✓' : 'Mark as Complete'}
          </button>
        </div>
      </div>
    );
  };

  if (selectedLesson) {
    const module = trainingModules.find(m => m.lessons.some(l => l.id === selectedLesson));
    const lesson = module?.lessons.find(l => l.id === selectedLesson);
    
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto">
          <LessonDetailView lesson={lesson} moduleColor={module.color} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🌱 Classroom Crops Master Teacher Training
              </h1>
              <p className="text-gray-600 text-lg">
                Your comprehensive guide to becoming an expert curriculum instructor
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">
                {calculateProgress()}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Object.keys(completedLessons).length}
              </div>
              <div className="text-sm text-gray-600">Lessons Completed</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">
                {trainingModules.reduce((sum, m) => sum + m.lessons.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Lessons</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">
                {trainingModules.length}
              </div>
              <div className="text-sm text-gray-600">Training Modules</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {trainingModules.map((module) => {
            const Icon = module.icon;
            const completedInModule = module.lessons.filter(l => completedLessons[l.id]).length;
            const isExpanded = expandedModules[module.id];
            
            return (
              <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${module.color} p-3 rounded-lg text-white`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                      <p className="text-gray-600 text-sm">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-700">
                        {completedInModule} / {module.lessons.length}
                      </div>
                      <div className="text-xs text-gray-500">completed</div>
                    </div>
                    {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    {module.lessons.map((lesson) => {
                      const TypeIcon = getTypeIcon(lesson.type);
                      const isComplete = completedLessons[lesson.id];
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson.id)}
                          className="w-full p-4 flex items-center justify-between hover:bg-white transition border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            {isComplete ? (
                              <CheckCircle size={20} className="text-green-500" />
                            ) : (
                              <Circle size={20} className="text-gray-300" />
                            )}
                            <div className="text-left">
                              <div className="font-medium text-gray-800">{lesson.title}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`text-xs px-2 py-1 rounded ${getTypeColor(lesson.type)}`}>
                                  {lesson.type}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock size={12} /> {lesson.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          <ChevronRight size={20} className="text-gray-400" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
          <p className="mb-4">
            Begin with Module 1 to understand the curriculum foundations, then progress through
            each module sequentially. Practice activities help you apply what you learn!
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                toggleModule(1);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Start Module 1
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg font-semibold transition">
              Download Full Curriculum PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomCropsTraining;
