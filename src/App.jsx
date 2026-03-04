import { useState, useRef } from “react”;

const T = “Dr. Iftekhar Ahmed”, D = “Lecturer, Department of Anatomy”, V = “Dissection Hall”, TM = “12.30 to 14.30”;
const REFS = [“Human Anatomy, A.K. Dutta, vol 1”,“Chaurasia’s Human Anatomy, vol 1”,“Singh Textbook of Anatomy, vol II”];
const EVAL = [“Oral questioning during the session”,“Attendance and participation”,“Item examination on the next class (oral and drawing figure)”];
const AIDS = [“White board and markers”,“Skeleton & skeletal components”,“Semirealistic image & photographs”];
const STD_ROWS_END = [
{segment:“Feedback”,time:“5 mins”,method:“By questioning”,description:“Judge students about present class”},
{segment:“Summary”,time:“5 mins”,method:“Memorization”,description:“Summarize total class & highlight take home messages”},
];
const EXAM_EVAL = [“Item examination  -  oral identification”,“Drawing & labelling task”,“Clinical correlation questions”];

function makeStdStart(prevTopic, topic) {
return [
{segment:“Welcome & greetings”,time:“5 mins”,method:“Interactive session”,description:“Greet students, take attendance, and set a positive learning environment for the session”},
{segment:“Collect knowledge about previous understanding”,time:“5 mins”,method:“Interactive session”,description:`Brief oral questions to assess students' existing knowledge on ${prevTopic || "previous topics"} and link it to today's session on ${topic}`},
{segment:“Learning objectives”,time:“2 mins”,method:“Presentation”,description:`Present and explain the learning objectives for today's topic: ${topic}`},
];
}

function makeStd(obj, mid, next, prevTopic, topic) {
return { objectives: obj, tableRows: […makeStdStart(prevTopic, topic), …mid, …STD_ROWS_END], evaluation: EVAL, teachingAids: AIDS, references: REFS, nextTopic: next };
}
function makeExam(obj, examDesc, next) {
return {
objectives: obj,
teachingAids: [“Skeleton & skeletal components”,“Examination specimens”,“Drawing materials”],
tableRows: [
{segment:“Preparation & instructions”,time:“5 mins”,method:“Interactive session”,description:“Explain item exam format and rules”},
{segment:“Item exam”,time:“40 mins”,method:“Item examination”,description: examDesc},
{segment:“Post-exam discussion”,time:“20 mins”,method:“Interactive session”,description:“Review correct answers, clarify common errors”},
{segment:“Feedback”,time:“10 mins”,method:“By questioning”,description:“Overall performance review”},
{segment:“Summary”,time:“5 mins”,method:“Memorization”,description:“Key points reinforced after exam review”},
],
evaluation: EXAM_EVAL, references: REFS, nextTopic: next
};
}

const DATA = {
“21.06.2025”: { topic:“Thoracic wall formation & thoracic vertebrae”, …makeStd(
[“To demonstrate the skeletal components forming the thoracic cage”,“To identify and label the thoracic vertebrae and their distinguishing features”,“To describe the articulation of ribs with thoracic vertebrae (costovertebral joints)”,“To explain the unique features of atypical thoracic vertebrae (T1, T10, T11, T12)”,“To identify costal facets on thoracic vertebrae and their significance”,“To correlate thoracic vertebral levels with surface anatomical landmarks”,“To describe movements possible at costovertebral and costotransverse joints”,“To explain the clinical importance of thoracic vertebral anatomy in spinal cord injuries”],
[{segment:“Thoracic cage & vertebrae demonstration”,time:“20 mins”,method:“Lecture & demonstration”,description:“Show skeleton  -  identify 12 thoracic vertebrae, costal facets, transverse & spinous processes. Highlight typical vs atypical vertebrae.”},
{segment:“Group discussion: vertebral features”,time:“15 mins”,method:“Group discussion”,description:“Students identify features on skeleton in groups, label diagrams”},
{segment:“Costovertebral joints & movements”,time:“15 mins”,method:“Lecture & demonstration”,description:“Demonstrate articulations of ribs with vertebrae, types of joints, movements during respiration”}],
“Thoracic cavity & sternum”, “Thoracic cavity & sternum”, “General thoracic anatomy”, “Thoracic wall formation & thoracic vertebrae”) },

“22.06.2025”: { topic:“Thoracic cavity & sternum”, …makeStd(
[“To describe the boundaries of the thoracic cavity (superior, inferior, anterior, posterior, lateral)”,“To identify the parts of the sternum: manubrium, body, and xiphoid process”,“To locate the sternal angle (angle of Louis) and explain its clinical significance”,“To identify the jugular notch and costal margins as surface landmarks”,“To describe the articulations of the sternum with clavicles and costal cartilages”,“To correlate the sternal angle with the level of T4/T5 intervertebral disc”,“To explain the clinical importance of the sternum in bone marrow aspiration”,“To describe the thoracic inlet and outlet with their boundaries”],
[{segment:“Sternum anatomy demonstration”,time:“20 mins”,method:“Lecture & demonstration”,description:“Show sternum on skeleton: manubrium, sternal angle, body, xiphoid. Palpate jugular notch and costal margins.”},
{segment:“Group discussion: surface landmarks”,time:“15 mins”,method:“Group discussion”,description:“Students palpate landmarks on each other and identify on diagrams”},
{segment:“Thoracic cavity boundaries”,time:“15 mins”,method:“Lecture & demonstration”,description:“Describe thoracic inlet (superior aperture) and outlet (inferior aperture), their boundaries and clinical relevance”}],
“Intercostal spaces & ribs”, “Thoracic wall formation & thoracic vertebrae”, “Thoracic cavity & sternum”) },

“23.06.2025”: { topic:“Intercostal spaces & ribs”, …makeStd(
[“To classify ribs into true, false, and floating ribs with examples”,“To identify the parts of a typical rib: head, neck, tubercle, angle, body, costal groove”,“To describe the features of atypical ribs (1st, 2nd, 10th, 11th, 12th ribs)”,“To define intercostal space and list its contents (muscles, vessels, nerves)”,“To describe the three layers of intercostal muscles and their actions”,“To explain the neurovascular bundle arrangement (VAN) in the costal groove”,“To differentiate typical from atypical intercostal spaces”,“To apply knowledge of intercostal space anatomy to clinical procedures (chest drain insertion)”],
[{segment:“Classification & features of ribs”,time:“18 mins”,method:“Lecture & demonstration”,description:“Show ribs on skeleton. Classify true/false/floating. Identify parts of typical rib. Demonstrate atypical features of ribs 1, 2, 11, 12.”},
{segment:“Group activity: rib identification”,time:“15 mins”,method:“Group discussion”,description:“Students identify specific ribs from skeletal specimens and describe features”},
{segment:“Intercostal space contents & VAN arrangement”,time:“15 mins”,method:“Lecture & demonstration”,description:“Explain muscles, vessels, nerve arrangement. Clinical importance  -  insert above upper border of lower rib”}],
“Mediastinum & intercostal nerve & spinal nerve”, “Thoracic cavity & sternum”, “Intercostal spaces & ribs”) },

“24.06.2025”: { topic:“Mediastinum & intercostal nerve & spinal nerve”, …makeStd(
[“To define the mediastinum and describe its location and boundaries”,“To subdivide the mediastinum into superior, anterior, middle, and posterior compartments”,“To list the contents of each subdivision of the mediastinum”,“To describe the course, branches, and distribution of a typical intercostal nerve”,“To explain the formation of a spinal nerve from dorsal and ventral roots”,“To describe the branches of a spinal nerve (dorsal ramus, ventral ramus, meningeal, communicating)”,“To correlate dermatome levels with clinical presentations of herpes zoster”,“To explain clinical importance of mediastinum in mediastinitis and mediastinal shift”],
[{segment:“Mediastinum subdivisions & contents”,time:“20 mins”,method:“Lecture & demonstration”,description:“Draw mediastinum divisions on board. List key structures: heart in middle, great vessels in superior, oesophagus in posterior.”},
{segment:“Group discussion: mediastinal contents”,time:“12 mins”,method:“Group discussion”,description:“Students map structures to mediastinal compartments using diagrams”},
{segment:“Intercostal & spinal nerve anatomy”,time:“15 mins”,method:“Lecture & demonstration”,description:“Trace course of intercostal nerve, spinal nerve formation, dermatome significance and clinical correlations”}],
“Bones & joints of the thorax”) },

“25.06.2025”: { topic:“Bones & joints of the thorax”, …makeStd(
[“To identify all bony components of the thoracic cage”,“To describe the sternocostal joints and their types (primary and secondary cartilaginous)”,“To describe the costovertebral joints: joint of head of rib and costotransverse joint”,“To explain the movements of ribs during inspiration and expiration (bucket-handle & pump-handle)”,“To identify the costochondral junction and its significance”,“To describe the interchondral joints between 6th-9th costal cartilages”,“To correlate joint anatomy with respiratory mechanics”,“To explain clinical conditions affecting thoracic joints (costochondritis, Tietze syndrome)”],
[{segment:“Thoracic joints demonstration”,time:“20 mins”,method:“Lecture & demonstration”,description:“Demonstrate all joint types on skeleton  -  sternocostal, costovertebral, costotransverse, interchondral. Classify each by type.”},
{segment:“Group activity: joint identification”,time:“15 mins”,method:“Group discussion”,description:“Students identify joints on specimens and describe their articular surfaces and movements”},
{segment:“Respiratory movements & clinical correlations”,time:“12 mins”,method:“Lecture & demonstration”,description:“Explain pump-handle and bucket-handle movements, correlate with respiration physiology”}],
“Review class”, “Mediastinum & intercostal nerve”, “Bones & joints of the thorax”) },

“26.06.2025”: { topic:“Review class on above all topics”, …makeStd(
[“To revise thoracic wall formation and thoracic vertebral anatomy”,“To review the sternum, thoracic cavity and its boundaries”,“To consolidate knowledge of ribs classification and intercostal space contents”,“To review mediastinum subdivisions and their contents”,“To consolidate understanding of thoracic joints and respiratory movements”,“To integrate knowledge of intercostal and spinal nerve distribution”,“To identify common exam questions and clarify doubts”,“To prepare students for the upcoming item examination”],
[{segment:“Quick recap quiz”,time:“10 mins”,method:“Interactive session”,description:“Rapid-fire oral questions covering all Week 1 topics”},
{segment:“Review: thoracic wall, vertebrae & sternum”,time:“20 mins”,method:“Lecture & demonstration”,description:“Systematic revision using skeleton and diagrams. Address common misconceptions.”},
{segment:“Group Q&A: ribs, spaces & mediastinum”,time:“20 mins”,method:“Group discussion”,description:“Students ask questions and solve MCQs in groups”},
{segment:“Mock item exam practice”,time:“10 mins”,method:“Practical demonstration”,description:“Students identify structures on skeleton under exam-like conditions”}],
“Item exam + thoracic vertebra”, “Bones & joints of the thorax”, “Review class on above all topics”) },

“28.06.2025”: { topic:“Item exam + thoracic vertebra”, …makeExam(
[“To assess ability to identify thoracic vertebral features on specimens”,“To evaluate understanding of typical vs atypical thoracic vertebrae”,“To test knowledge of costovertebral joint anatomy”,“To assess ability to draw and label a thoracic vertebra”,“To evaluate clinical correlations related to thoracic vertebrae”],
“Identify structures on thoracic vertebra specimens, answer oral questions, perform drawing and labelling”,
“Heart with pericardium”, “Review class on Week 1”, “Item exam on thoracic vertebra”) },

“29.06.2025”: { topic:“Heart with pericardium”, …makeStd(
[“To describe the position and orientation of the heart in the thoracic cavity”,“To define the pericardium and distinguish fibrous from serous pericardium”,“To describe the two layers of serous pericardium: parietal and visceral (epicardium)”,“To explain the pericardial cavity and its clinical significance (pericardial effusion, cardiac tamponade)”,“To identify the sinuses of pericardium: transverse and oblique”,“To describe the blood supply and nerve supply of the pericardium”,“To explain the surface projection of the heart on the anterior chest wall”,“To describe the anatomical basis of pericardiocentesis”],
[{segment:“Pericardium layers & sinuses”,time:“20 mins”,method:“Lecture & demonstration”,description:“Demonstrate fibrous and serous pericardium. Explain transverse and oblique sinuses with clinical relevance.”},
{segment:“Group discussion: pericardial anatomy”,time:“15 mins”,method:“Group discussion”,description:“Students discuss clinical scenarios  -  cardiac tamponade, pericardiocentesis approach”},
{segment:“Heart position & surface projection”,time:“15 mins”,method:“Lecture & demonstration”,description:“Show heart position in thorax, surface markings of cardiac borders on anterior chest wall”}],
“Heart with pericardium (chambers)”) },

“30.06.2025”: { topic:“Heart  -  chambers, valves & coronary vessels”, …makeStd(
[“To identify the external features of the heart: surfaces, borders, and apex”,“To describe the four chambers of the heart and their internal features”,“To identify the atrioventricular and semilunar valves and their positions”,“To describe the sulci of the heart: coronary, anterior and posterior interventricular”,“To describe the conducting system of the heart (SA node, AV node, Bundle of His)”,“To explain blood supply through coronary arteries and cardiac veins”,“To correlate coronary artery anatomy with myocardial infarction territory”,“To identify surface projection of cardiac valves for auscultation”],
[{segment:“External features & chambers of heart”,time:“20 mins”,method:“Lecture & demonstration”,description:“Demonstrate surfaces, borders, apex, sulci. Open chambers to show internal features, valves and papillary muscles.”},
{segment:“Group activity: chamber identification”,time:“15 mins”,method:“Group discussion”,description:“Students identify chambers and valves on heart model in groups”},
{segment:“Coronary arteries & conducting system”,time:“15 mins”,method:“Lecture & demonstration”,description:“Trace left and right coronary arteries. Explain conducting system pathway and clinical relevance in arrhythmias and MI.”}],
“Heart  -  great vessels & integration”, “Heart with pericardium”, “Heart  -  chambers, valves & coronary vessels”) },

“01.07.2025”: { topic:“Heart  -  great vessels & integration”, …makeStd(
[“To describe the great vessels entering and leaving the heart”,“To explain fetal circulation and changes at birth (foramen ovale, ductus arteriosus)”,“To describe the lymphatic drainage of the heart”,“To explain the nerve supply of the heart (sympathetic and parasympathetic)”,“To discuss congenital heart defects (VSD, ASD, Tetralogy of Fallot)”,“To perform surface marking of the heart and valves”,“To integrate all three days of heart anatomy”],
[{segment:“Great vessels & fetal circulation”,time:“18 mins”,method:“Lecture & demonstration”,description:“Identify aorta, pulmonary trunk, venae cavae, pulmonary veins. Explain fetal circulation and postnatal changes.”},
{segment:“Nerve supply, lymphatics & congenital defects”,time:“15 mins”,method:“Lecture & demonstration”,description:“Describe cardiac plexus, lymphatic drainage, common congenital anomalies with anatomical basis”},
{segment:“Group practical: surface marking exercise”,time:“15 mins”,method:“Group discussion”,description:“Students practice surface marking of heart borders and valve auscultation points on each other”}],
“Review class”, “Heart  -  chambers, valves & coronary vessels”, “Heart  -  great vessels & integration”) },

“02.07.2025”: { topic:“Review class on above all topics”, …makeStd(
[“To revise heart anatomy: chambers, valves, and surfaces”,“To consolidate knowledge of pericardium and its sinuses”,“To review coronary artery distribution and clinical significance”,“To revise conducting system and its clinical relevance”,“To integrate heart and mediastinum anatomy”,“To clarify doubts and address common misconceptions”,“To prepare students for the sternum item exam”],
[{segment:“Quick quiz: heart anatomy”,time:“10 mins”,method:“Interactive session”,description:“Rapid-fire questions covering all 3 heart sessions”},
{segment:“Systematic revision: heart & pericardium”,time:“25 mins”,method:“Lecture & demonstration”,description:“Structured review using heart model  -  pericardium, chambers, valves, coronary vessels, conducting system”},
{segment:“Group MCQ solving”,time:“20 mins”,method:“Group discussion”,description:“Students solve clinical scenario questions related to heart anatomy in groups”}],
“Item exam + sternum”, “Heart with pericardium”, “Review class on heart anatomy”) },

“03.07.2025”: { topic:“Item exam + sternum”, …makeExam(
[“To assess ability to identify sternum parts on a specimen”,“To evaluate knowledge of sternal angle and its clinical significance”,“To test understanding of sternocostal articulations”,“To assess drawing and labelling of the sternum”,“To evaluate application of sternum anatomy to clinical procedures”],
“Identify manubrium, sternal angle, body, xiphoid on specimen. Answer oral questions. Perform drawing and labelling.”,
“Lung with pleura, trachea & bronchus”) },

“06.07.2025”: { topic:“Lung with pleura, trachea & bronchus”, …makeStd(
[“To describe the shape, surfaces, and borders of each lung”,“To identify the root and hilum of the lung and list their contents”,“To describe the lobes and fissures of right and left lungs”,“To define pleura and distinguish visceral from parietal pleura”,“To identify pleural recesses: costodiaphragmatic and costomediastinal”,“To explain the surface projection of lungs and pleura on the chest wall”,“To describe the trachea: extent, relations, and bifurcation (carina)”,“To describe the primary bronchi and their differences (clinical significance in foreign body)”],
[{segment:“Lung morphology & pleura demonstration”,time:“20 mins”,method:“Lecture & demonstration”,description:“Show lung specimen  -  identify lobes, fissures, hilum. Explain parietal vs visceral pleura, pleural recesses, surface projection.”},
{segment:“Group discussion: lung borders & pleural recesses”,time:“15 mins”,method:“Group discussion”,description:“Students draw and label lung projection on diagram and discuss pleural aspiration site”},
{segment:“Trachea & bronchial tree”,time:“15 mins”,method:“Lecture & demonstration”,description:“Describe trachea extent (C6-T4/5), relations, carina. Compare left vs right bronchus  -  clinical relevance for foreign body inhalation.”}],
“Lung  -  bronchopulmonary segments”, “Heart anatomy”, “Lung with pleura, trachea & bronchus”) },

“07.07.2025”: { topic:“Lung  -  bronchopulmonary segments & clinical anatomy”, …makeStd(
[“To describe the bronchopulmonary segments of right and left lungs”,“To explain the concept of bronchopulmonary segment as a surgical unit”,“To describe the blood supply of the lungs (pulmonary and bronchial vessels)”,“To describe the lymphatic drainage of the lungs”,“To explain the nerve supply of lungs and pleura (pulmonary plexus)”,“To discuss respiratory conditions with anatomical basis (pneumonia, pneumothorax, lung cancer)”,“To apply knowledge of bronchopulmonary segments in postural drainage”],
[{segment:“Bronchopulmonary segments & blood supply”,time:“20 mins”,method:“Lecture & demonstration”,description:“Identify 10 right and 8-10 left bronchopulmonary segments. Explain pulmonary and bronchial vessels, lymphatics.”},
{segment:“Group activity: segment mapping”,time:“15 mins”,method:“Group discussion”,description:“Students map segments to lung lobes and discuss postural drainage positions”},
{segment:“Clinical correlations”,time:“15 mins”,method:“Lecture & demonstration”,description:“Discuss pneumothorax, pleural effusion, lung collapse with anatomical basis.”}],
“Review class”, “Lung with pleura, trachea & bronchus”, “Lung  -  bronchopulmonary segments & clinical anatomy”) },

“08.07.2025”: { topic:“Review class on above all topics”, …makeStd(
[“To revise lung morphology, lobes, fissures, and hilum contents”,“To consolidate knowledge of pleura and pleural recesses”,“To review trachea and bronchial tree anatomy”,“To revise bronchopulmonary segments and their clinical applications”,“To integrate heart, lung, and mediastinum anatomy”,“To prepare students for the ribs item exam”],
[{segment:“Quick quiz: lung & pleura anatomy”,time:“10 mins”,method:“Interactive session”,description:“Rapid revision questions covering lungs, trachea, bronchi, and pleura”},
{segment:“Systematic review using specimens”,time:“25 mins”,method:“Lecture & demonstration”,description:“Comprehensive review of all lung and pleural anatomy”},
{segment:“Group MCQ and clinical scenario solving”,time:“18 mins”,method:“Group discussion”,description:“Students solve questions on pneumothorax, bronchiectasis, foreign body aspiration”}],
“Item exam + ribs”, “Lung anatomy”, “Review class on lung & pleura”) },

“09.07.2025”: { topic:“Item exam + ribs”, …makeExam(
[“To assess ability to identify specific ribs on specimens”,“To evaluate knowledge of typical vs atypical rib features”,“To test understanding of costal groove and VAN arrangement”,“To assess drawing and labelling of a typical rib”,“To evaluate clinical application in chest drain insertion”],
“Identify specific ribs, label parts of typical rib, answer oral questions on atypical ribs and VAN arrangement”,
“The diaphragm”, “Ribs item exam”, “Review class on ribs & lung”) },

“10.07.2025”: { topic:“The diaphragm”, …makeStd(
[“To describe the shape, position, and attachments of the diaphragm”,“To identify the three parts: sternal, costal, and vertebral (crura)”,“To list the three main openings: aortic (T12), oesophageal (T10), vena caval (T8)”,“To describe the structures passing through each diaphragmatic opening”,“To explain the blood supply (phrenic and intercostal arteries)”,“To describe the nerve supply (phrenic nerve C3,4,5)”,“To explain the role of the diaphragm in respiration and increasing intra-abdominal pressure”,“To discuss clinical conditions: hiatus hernia, diaphragmatic hernia, phrenic nerve palsy”],
[{segment:“Diaphragm anatomy: attachments & openings”,time:“20 mins”,method:“Lecture & demonstration”,description:“Draw diaphragm, show three parts, central tendon. Demonstrate three openings with vertebral levels and structures passing through.”},
{segment:“Group discussion: diaphragm openings”,time:“15 mins”,method:“Group discussion”,description:“Students complete table of openings  -  level, structures, and mnemonic (I 8 10 eggs at 12)”},
{segment:“Nerve supply, blood supply & clinical correlations”,time:“15 mins”,method:“Lecture & demonstration”,description:“Explain phrenic nerve (C3,4,5 keeps diaphragm alive). Discuss hiatus hernia types and diaphragmatic hernia.”}],
“The diaphragm (continued)”, “Ribs & intercostal spaces”, “The diaphragm (continued)”, “Ribs & intercostal anatomy”, “The diaphragm”) },

“13.07.2025”: { topic:“The diaphragm  -  function & clinical correlations”, …makeStd(
[“To consolidate understanding of diaphragm attachments and openings”,“To describe the action of the diaphragm during quiet and forced respiration”,“To explain the role of diaphragm in increasing intra-abdominal pressure”,“To describe the lymphatic drainage of the diaphragm”,“To discuss the referred pain mechanism from diaphragm irritation (shoulder tip pain)”,“To explain developmental origin of the diaphragm and basis of congenital hernias”,“To integrate diaphragm with complete respiratory anatomy”],
[{segment:“Diaphragm function & respiratory mechanics”,time:“18 mins”,method:“Lecture & demonstration”,description:“How diaphragm contracts during inspiration, increases vertical diameter of chest.”},
{segment:“Development, lymphatics & referred pain”,time:“15 mins”,method:“Lecture & demonstration”,description:“Embryological development from septum transversum. Referred pain to shoulder tip via phrenic nerve.”},
{segment:“Group discussion: clinical cases”,time:“15 mins”,method:“Group discussion”,description:“Students analyse cases of hiatus hernia, diaphragmatic hernia, subphrenic abscess”}],
“Item exam + joints of the thorax”, “The diaphragm”, “The diaphragm  -  function & clinical correlations”) },

“14.07.2025”: { topic:“Item exam + joints of the thorax”, …makeExam(
[“To assess knowledge of thoracic joint types and their articular surfaces”,“To evaluate understanding of costovertebral and sternocostal joint anatomy”,“To test understanding of respiratory movements at thoracic joints”,“To assess ability to draw and label a costovertebral joint”,“To evaluate clinical applications of joint anatomy”],
“Identify joint types on specimens, describe movements, answer oral questions, draw and label costovertebral joint”,
“Blood vessels, nerves & lymphatics of the thorax”) },

“15.07.2025”: { topic:“Blood vessels, nerves & lymphatics of the thorax”, …makeStd(
[“To describe the thoracic aorta and its branches (posterior intercostal, subcostal, phrenic arteries)”,“To describe the internal thoracic artery and its clinical significance (CABG graft)”,“To identify the azygos system of veins and its clinical importance”,“To describe the thoracic duct: origin, course, and termination”,“To describe the sympathetic trunk in the thorax and its ganglia”,“To explain the splanchnic nerves (greater, lesser, least) and their origins”,“To discuss the vagus nerve in the thorax and formation of oesophageal plexus”,“To apply knowledge to clinical conditions: coarctation of aorta, thoracic duct injury”],
[{segment:“Thoracic aorta & internal thoracic artery”,time:“18 mins”,method:“Lecture & demonstration”,description:“Trace thoracic aorta and its branches on diagram. Describe internal thoracic artery as graft in CABG.”},
{segment:“Azygos veins & thoracic duct”,time:“15 mins”,method:“Lecture & demonstration”,description:“Trace azygos, hemiazygos, accessory hemiazygos veins. Describe thoracic duct from cisterna chyli to left venous angle.”},
{segment:“Group discussion: nerves of thorax”,time:“15 mins”,method:“Group discussion”,description:“Students trace sympathetic trunk, splanchnic nerves, and vagus nerve through thorax in groups”}],
“Oesophagus”, “Thoracic joints”, “Blood vessels, nerves & lymphatics of the thorax”) },

“16.07.2025”: { topic:“Oesophagus”, …makeStd(
[“To describe the extent of the oesophagus (C6 to T11) and its three parts”,“To identify the four anatomical constrictions and their clinical significance”,“To describe the relations of the thoracic oesophagus at different levels”,“To describe the blood supply, venous drainage, and lymphatic drainage”,“To explain the nerve supply: parasympathetic (vagus) and sympathetic”,“To describe the lower oesophageal sphincter”,“To discuss clinical conditions: oesophageal varices, carcinoma, achalasia, GORD”,“To explain porto-systemic anastomosis in the oesophagus”],
[{segment:“Oesophagus: extent, constrictions & relations”,time:“20 mins”,method:“Lecture & demonstration”,description:“Draw oesophagus on board. Mark 4 constrictions (cricopharyngeus, aortic arch, left bronchus, diaphragm). Describe relations at each level.”},
{segment:“Group discussion: constrictions”,time:“15 mins”,method:“Group discussion”,description:“Students discuss significance of constrictions for foreign body lodgement, endoscopy distances, and carcinoma sites”},
{segment:“Blood supply, lymphatics, nerves & clinical correlations”,time:“15 mins”,method:“Lecture & demonstration”,description:“Explain porto-systemic anastomosis and oesophageal varices in portal hypertension. Discuss achalasia and GORD.”}],
“Item exam”, “Blood vessels, nerves & lymphatics”, “Oesophagus”) },

“17.07.2025”: { topic:“Item exam”, …makeExam(
[“To comprehensively assess knowledge of Weeks 4-5 thoracic anatomy”,“To evaluate identification skills on anatomical specimens”,“To test ability to draw and label key anatomical structures”,“To assess clinical correlation knowledge”,“To evaluate overall understanding of thoracic anatomy”],
“Multi-station practical: identify structures (diaphragm, oesophagus, blood vessels, nerves). Answer oral questions. Drawing tasks.”,
“Review class”) },

“20.07.2025”: { topic:“Review class”, …makeStd(
[“To comprehensively review all thoracic anatomy topics from the entire Thorax Card”,“To integrate knowledge of thoracic wall, cavity, heart, lungs, diaphragm, and mediastinum”,“To address weaknesses identified in the item exam”,“To consolidate clinical correlations across all thoracic topics”,“To prepare students for the end-of-card assessment”,“To identify high-yield topics for university examinations”],
[{segment:“Comprehensive quiz  -  all thorax topics”,time:“10 mins”,method:“Interactive session”,description:“MCQs and rapid oral questions covering entire Thorax Card curriculum”},
{segment:“Review Part 1: thoracic wall & mediastinum”,time:“20 mins”,method:“Lecture & demonstration”,description:“Review thoracic wall, vertebrae, ribs, sternum, intercostal spaces, mediastinum divisions”},
{segment:“Review Part 2: heart, lungs & diaphragm”,time:“20 mins”,method:“Lecture & demonstration”,description:“Review heart, pericardium, lungs, pleura, trachea, bronchi, diaphragm, oesophagus, vessels”},
{segment:“Clinical integration discussion”,time:“12 mins”,method:“Group discussion”,description:“Integrated clinical cases involving multiple thoracic structures”}],
“Next anatomy card”, “Oesophagus”, “Review class  -  all thorax topics”) },
};

const SCHEDULE = [
{w:1,d:1,date:“21.06.2025”,isExam:false},{w:1,d:2,date:“22.06.2025”,isExam:false},{w:1,d:3,date:“23.06.2025”,isExam:false},
{w:1,d:4,date:“24.06.2025”,isExam:false},{w:1,d:5,date:“25.06.2025”,isExam:false},{w:2,d:1,date:“26.06.2025”,isExam:false},
{w:2,d:2,date:“28.06.2025”,isExam:true},{w:2,d:3,date:“29.06.2025”,isExam:false},{w:2,d:4,date:“30.06.2025”,isExam:false},
{w:2,d:5,date:“01.07.2025”,isExam:false},{w:3,d:1,date:“02.07.2025”,isExam:false},{w:3,d:2,date:“03.07.2025”,isExam:true},
{w:3,d:3,date:“06.07.2025”,isExam:false},{w:3,d:4,date:“07.07.2025”,isExam:false},{w:3,d:5,date:“08.07.2025”,isExam:false},
{w:4,d:1,date:“09.07.2025”,isExam:true},{w:4,d:2,date:“10.07.2025”,isExam:false},{w:4,d:3,date:“13.07.2025”,isExam:false},
{w:4,d:4,date:“14.07.2025”,isExam:true},{w:4,d:5,date:“15.07.2025”,isExam:false},{w:5,d:1,date:“16.07.2025”,isExam:false},
{w:5,d:2,date:“17.07.2025”,isExam:true},{w:5,d:3,date:“20.07.2025”,isExam:false},
];

function Field({label, value, onChange}) {
return (
<p style={{margin:“4px 0”,display:“flex”,gap:6,alignItems:“baseline”}}>
<strong style={{flexShrink:0,minWidth:92}}>{label}</strong>
<input value={value} onChange={e=>onChange(e.target.value)} style={{border:“none”,borderBottom:“1px dashed #aab”,background:“transparent”,fontFamily:“inherit”,fontSize:“inherit”,outline:“none”,padding:“1px 2px”,width:“100%”}}/>
</p>
);
}
function Area({value, onChange, onPaste}) {
return <textarea value={value} onChange={e=>onChange(e.target.value)} onPaste={onPaste} rows={2}
style={{border:“none”,borderBottom:“1px dashed #aab”,background:“transparent”,fontFamily:“inherit”,fontSize:“inherit”,outline:“none”,padding:“1px 2px”,width:“100%”,resize:“vertical”,lineHeight:1.5}}/>;
}

export default function App() {
const [sel, setSel] = useState(null);
const [plans, setPlans] = useState(() => {
const out = {};
Object.entries(DATA).forEach(([date,d]) => { out[date] = {…d, date, time:TM, teacher:T, designation:D, venue:V}; });
return out;
});
const [toast, setToast] = useState(null);

const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),3000); };
const plan = sel ? plans[sel.date] : null;
const up = (field, val) => setPlans(p=>({…p,[sel.date]:{…p[sel.date],[field]:val}}));
const upList = (f,i,v) => { const a=[…plan[f]]; a[i]=v; up(f,a); };
const addItem = f => up(f,[…plan[f],””]);
const remItem = (f,i) => up(f,plan[f].filter((_,x)=>x!==i));
const upRow = (i,c,v) => { const r=[…plan.tableRows]; r[i]={…r[i],[c]:v}; up(“tableRows”,r); };

const pasteObj = (i,e) => {
const txt = e.clipboardData.getData(“text”);
const lines = txt.split(/\n/).map(l=>l.replace(/^[\s\u2022-*\d]+[.)]\s*/,””).trim()).filter(l=>l);
if (lines.length>1) { e.preventDefault(); const a=[…plan.objectives]; a.splice(i,1,…lines); up(“objectives”,a); showToast(`Split into ${lines.length} bullets`); }
};

const sheetRef = useRef(null);

const loadHtml2Pdf = () => new Promise((resolve) => {
if (window.html2pdf) { resolve(window.html2pdf); return; }
const s = document.createElement(“script”);
s.src = “https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js”;
s.onload = () => resolve(window.html2pdf);
document.head.appendChild(s);
});

const download = async () => {
if (!sheetRef.current) return;
showToast(“Generating PDF…”);
try {
const html2pdf = await loadHtml2Pdf();
const opt = {
margin: [10, 12, 10, 12],
filename: `lesson-plan-${sel.date}.pdf`,
image: { type: “jpeg”, quality: 0.98 },
html2canvas: { scale: 2, useCORS: true },
jsPDF: { unit: “mm”, format: “a4”, orientation: “portrait” },
};
await html2pdf().set(opt).from(sheetRef.current).save();
showToast(“PDF downloaded!”);
} catch(e) {
showToast(“PDF failed. Try again.”, “error”);
}
};

const weeks = [1,2,3,4,5];
const td = {border:“1px solid #555”,padding:“4px 6px”,verticalAlign:“top”,fontSize:“10.5pt”};
const th = {…td,fontWeight:“bold”,background:”#f0f0f0”};

return (
<div style={{display:“flex”,height:“100vh”,fontFamily:”‘Times New Roman’,serif”,background:”#1a1f2e”,overflow:“hidden”}}>
<style>{`::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#3a4a6a;border-radius:3px} .sb{width:100%;text-align:left;border:none;cursor:pointer;padding:9px 14px;border-radius:5px;transition:all 0.12s;background:transparent;font-family:inherit;} .sb:hover{background:rgba(100,160,255,0.1)}.sb.on{background:rgba(100,160,255,0.2);border-left:3px solid #64a0ff} .sb.ex.on{background:rgba(246,173,85,0.15);border-left:3px solid #f6ad55} .ab{background:#e8f5e9;color:#2e7d32;border:1.5px dashed #2e7d32;font-size:10px;padding:2px 9px;border-radius:3px;cursor:pointer;margin-top:4px;font-family:Arial,sans-serif} .rb{background:none;color:#e57373;border:none;cursor:pointer;padding:0 4px;font-size:13px;flex-shrink:0} .toast{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);padding:10px 22px;border-radius:6px;font-family:Arial,sans-serif;font-size:12px;font-weight:600;z-index:9999;background:#1565c0;color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.35);white-space:nowrap} .wl{font-family:Arial,sans-serif;font-size:9px;font-weight:700;color:#64a0ff;letter-spacing:1.5px;text-transform:uppercase;padding:10px 14px 3px;opacity:.75}`}</style>
{toast && <div className="toast">{toast}</div>}

```
  {/* SIDEBAR */}
  <div style={{width:260,background:"#111827",borderRight:"1px solid #253050",display:"flex",flexDirection:"column",overflow:"hidden",flexShrink:0}}>
    <div style={{padding:"14px 14px 10px",borderBottom:"1px solid #253050"}}>
      <div style={{color:"#64a0ff",fontSize:"10px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",fontFamily:"Arial,sans-serif",marginBottom:3}}>SOMC Batch 63</div>
      <div style={{color:"#e2e8f0",fontSize:"13px",fontFamily:"Arial,sans-serif",fontWeight:600}}>Thorax Card</div>
      <div style={{color:"#4a6080",fontSize:"9px",fontFamily:"Arial,sans-serif",marginTop:1}}>21.06  -  20.07.2025 . 23 sessions</div>
    </div>
    <div style={{overflowY:"auto",flex:1,paddingBottom:10}}>
      {weeks.map(w=>(
        <div key={w}>
          <div className="wl">Week {w}</div>
          {SCHEDULE.filter(s=>s.w===w).map(s=>{
            const p=DATA[s.date]; const active=sel?.date===s.date;
            return (
              <button key={s.date} className={`sb ${s.isExam?"ex":""} ${active?"on":""}`} onClick={()=>setSel(s)}>
                <div style={{color:"#718096",fontSize:"9px",fontFamily:"Arial,sans-serif",marginBottom:1}}>Day {s.d} . {s.date}</div>
                <div style={{color:s.isExam?"#f6ad55":"#cbd5e0",fontSize:"11px",lineHeight:1.3,fontWeight:s.isExam?700:400}}>{p?.topic}</div>
              </button>
            );
          })}
        </div>
      ))}
    </div>
    <div style={{padding:"8px 14px",borderTop:"1px solid #253050",fontFamily:"Arial,sans-serif",fontSize:"9px",color:"#4a5568"}}>All 23 plans ready</div>
  </div>

  {/* MAIN */}
  <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
    <div style={{background:"#0f1523",borderBottom:"1px solid #253050",padding:"9px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span style={{color:plan?"#e2e8f0":"#4a6080",fontFamily:"Arial,sans-serif",fontSize:"11px"}}>{plan?`? ${plan.topic}  -  ${sel.date}`:"?Select a session"}</span>
      {plan && <button onClick={download} style={{cursor:"pointer",border:"none",borderRadius:4,padding:"7px 14px",fontSize:"11px",fontWeight:700,background:"#1565c0",color:"#fff",fontFamily:"Arial,sans-serif"}}>?Download PDF</button>}
    </div>

    <div style={{flex:1,overflowY:"auto",background:"#c8c4ba"}}>
      {!plan && (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:10}}>
          <div style={{fontSize:44}}>?</div>
          <div style={{fontFamily:"Arial,sans-serif",fontSize:"14px",fontWeight:600,color:"#2a3550"}}>Select a class from the calendar</div>
          <div style={{fontFamily:"Arial,sans-serif",fontSize:"11px",color:"#8a9aaa"}}>All 23 lesson plans are ready  -  fully editable</div>
        </div>
      )}
      {plan && (
        <div style={{padding:"16px 18px"}}>

          <div ref={sheetRef} style={{background:"#fff",maxWidth:820,margin:"0 auto",padding:"1.3cm 1.7cm 1.7cm",boxShadow:"0 4px 28px rgba(0,0,0,.22)"}}>
            <h2 style={{textAlign:"center",fontSize:"14pt",fontWeight:"bold",marginBottom:10}}>Lesson plan</h2>
            <Field label="Topic:" value={plan.topic} onChange={v=>up("topic",v)}/>
            <Field label="Date:" value={plan.date} onChange={v=>up("date",v)}/>
            <Field label="Time:" value={plan.time} onChange={v=>up("time",v)}/>
            <Field label="Teacher:" value={plan.teacher} onChange={v=>up("teacher",v)}/>
            <Field label="Designation:" value={plan.designation} onChange={v=>up("designation",v)}/>
            <Field label="Venue:" value={plan.venue} onChange={v=>up("venue",v)}/>

            <p style={{margin:"12px 0 4px"}}><strong>Learning objectives:</strong>
              <span style={{fontFamily:"Arial,sans-serif",fontSize:"9px",background:"#fff8e1",color:"#7a5c00",border:"1px solid #f0c040",borderRadius:3,padding:"1px 6px",marginLeft:8}}>? Paste list to auto-split</span>
            </p>
            <ul style={{margin:"0 0 4px 20px",padding:0}}>
              {plan.objectives.map((o,i)=>(
                <li key={i} style={{margin:"4px 0"}}>
                  <span style={{display:"flex",gap:5,alignItems:"flex-start"}}>
                    <Area value={o} onChange={v=>upList("objectives",i,v)} onPaste={e=>pasteObj(i,e)}/>
                    <button className="rb" onClick={()=>remItem("objectives",i)}>x</button>
                  </span>
                </li>
              ))}
            </ul>
            <button className="ab" onClick={()=>addItem("objectives")}>+ Add Objective</button>

            <p style={{margin:"12px 0 4px"}}><strong>Teaching aids and materials</strong></p>
            <ol style={{margin:"0 0 4px 28px",padding:0}}>
              {plan.teachingAids.map((a,i)=>(
                <li key={i} style={{margin:"4px 0"}}><span style={{display:"flex",gap:5,alignItems:"center"}}>
                  <input value={a} onChange={e=>upList("teachingAids",i,e.target.value)} style={{border:"none",borderBottom:"1px dashed #aab",background:"transparent",fontFamily:"inherit",fontSize:"inherit",outline:"none",padding:"1px 2px",width:"100%"}}/>
                  <button className="rb" onClick={()=>remItem("teachingAids",i)}>x</button>
                </span></li>
              ))}
            </ol>
            <button className="ab" onClick={()=>addItem("teachingAids")}>+ Add Aid</button>

            <p style={{margin:"14px 0 6px"}}><strong>Teaching  -  learning method</strong></p>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead><tr>{["Segment","Time","Method","Description"].map(h=><th key={h} style={th}>{h}</th>)}<th style={{...th,width:26}}></th></tr></thead>
              <tbody>
                {plan.tableRows.map((r,i)=>(
                  <tr key={i}>
                    {["segment","time","method","description"].map(c=>(
                      <td key={c} style={td}><Area value={r[c]} onChange={v=>upRow(i,c,v)}/></td>
                    ))}
                    <td style={{...td,padding:2,textAlign:"center"}}><button className="rb" onClick={()=>up("tableRows",plan.tableRows.filter((_,x)=>x!==i))}>x</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="ab" onClick={()=>up("tableRows",[...plan.tableRows,{segment:"",time:"",method:"",description:""}])} style={{marginTop:6}}>+ Add Row</button>

            <p style={{margin:"14px 0 4px"}}><strong>Evaluation</strong></p>
            <ul style={{margin:"0 0 4px 20px",padding:0}}>
              {plan.evaluation.map((e,i)=>(
                <li key={i} style={{margin:"4px 0"}}><span style={{display:"flex",gap:5,alignItems:"center"}}>
                  <input value={e} onChange={x=>upList("evaluation",i,x.target.value)} style={{border:"none",borderBottom:"1px dashed #aab",background:"transparent",fontFamily:"inherit",fontSize:"inherit",outline:"none",padding:"1px 2px",width:"100%"}}/>
                  <button className="rb" onClick={()=>remItem("evaluation",i)}>x</button>
                </span></li>
              ))}
            </ul>
            <button className="ab" onClick={()=>addItem("evaluation")}>+ Add Evaluation</button>

            <p style={{margin:"14px 0 4px"}}><strong>References</strong></p>
            <ul style={{margin:"0 0 4px 20px",padding:0}}>
              {plan.references.map((r,i)=>(
                <li key={i} style={{margin:"4px 0"}}><span style={{display:"flex",gap:5,alignItems:"center"}}>
                  <input value={r} onChange={e=>upList("references",i,e.target.value)} style={{border:"none",borderBottom:"1px dashed #aab",background:"transparent",fontFamily:"inherit",fontSize:"inherit",outline:"none",padding:"1px 2px",width:"100%"}}/>
                  <button className="rb" onClick={()=>remItem("references",i)}>x</button>
                </span></li>
              ))}
            </ul>
            <button className="ab" onClick={()=>addItem("references")}>+ Add Reference</button>

            <p style={{marginTop:"14px",display:"flex",gap:6,alignItems:"baseline"}}>
              <strong style={{flexShrink:0}}>Next topic:</strong>
              <input value={plan.nextTopic} onChange={e=>up("nextTopic",e.target.value)} style={{border:"none",borderBottom:"1px dashed #aab",background:"transparent",fontFamily:"inherit",fontSize:"inherit",outline:"none",padding:"1px 2px",width:"100%"}}/>
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
```

);
}
