// Show membership plan details
function showMembership(plan) {
  const details = {
    basic: '<h3>Basic Plan</h3><ul><li>Access to gym equipment</li><li>Locker room</li><li>1 group class/week</li></ul>',
    standard: '<h3>Standard Plan</h3><ul><li>All Basic features</li><li>Unlimited group classes</li><li>1 personal training session/month</li></ul>',
    premium: '<h3>Premium Plan</h3><ul><li>All Standard features</li><li>Unlimited personal training</li><li>Nutrition consultation</li></ul>'
  };
  const membershipDiv = document.getElementById('membership-content');
  if (membershipDiv) {
    membershipDiv.innerHTML = details[plan] || '';
    membershipDiv.style.display = 'block';
  }
}

// Show trainer image and info
function showTrainer(trainer) {
  const images = {
    alex: 'https://randomuser.me/api/portraits/men/32.jpg',
    maya: 'https://randomuser.me/api/portraits/women/44.jpg',
    david: 'https://randomuser.me/api/portraits/men/65.jpg'
  };
  const info = {
    alex: '<h3>Alex – Strength Coach</h3><img src="' + images.alex + '" alt="Alex" class="trainer-img"><p>Alex specializes in strength and conditioning for all levels.</p>',
    maya: '<h3>Maya – Yoga Trainer</h3><img src="' + images.maya + '" alt="Maya" class="trainer-img"><p>Maya leads yoga sessions focused on balance and mindfulness.</p>',
    david: '<h3>David – Boxing Coach</h3><img src="' + images.david + '" alt="David" class="trainer-img"><p>David offers boxing training for beginners and advanced athletes.</p>'
  };
  const trainerDiv = document.getElementById('trainer-content');
  if (trainerDiv) {
    trainerDiv.innerHTML = info[trainer] || '';
    trainerDiv.style.display = 'block';
  }
}

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
  }
}

function joinGym() {
  alert("Welcome to PowerFit Gym! 💪");
}

function sendMessage(event) {
  event.preventDefault();
  alert("Message sent successfully!");
}
