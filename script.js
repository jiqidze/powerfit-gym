// Show module content dynamically
function showModule(module) {
  const content = {
    weight: '<h3>Weight Training</h3><p>Build muscle and strength with our expert-led weight training sessions.</p>',
    crossfit: '<h3>CrossFit</h3><p>High-intensity CrossFit classes to boost your endurance and fitness.</p>',
    yoga: '<h3>Yoga</h3><p>Relax and improve flexibility with our calming yoga classes.</p>',
    boxing: '<h3>Boxing</h3><p>Learn boxing techniques and get fit with our professional coaches.</p>',
    alex: '<h3>Alex – Strength Coach</h3><p>Alex specializes in strength and conditioning for all levels.</p>',
    maya: '<h3>Maya – Yoga Trainer</h3><p>Maya leads yoga sessions focused on balance and mindfulness.</p>',
    david: '<h3>David – Boxing Coach</h3><p>David offers boxing training for beginners and advanced athletes.</p>'
  };
  const moduleDiv = document.getElementById('module-content');
  if (moduleDiv) {
    moduleDiv.innerHTML = content[module] || '';
    moduleDiv.style.display = 'block';
    moduleDiv.scrollIntoView({behavior: 'smooth'});
  }
}

function joinGym() {
  alert("Welcome to PowerFit Gym! 💪");
}

function sendMessage(event) {
  event.preventDefault();
  alert("Message sent successfully!");
}
