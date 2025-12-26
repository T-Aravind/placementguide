// Auth Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('name', document.getElementById('userName').value);
        localStorage.setItem('dept', document.getElementById('dept').value);
        window.location.href = 'home.html';
    });
}

// Display personalized data
if (document.getElementById('welcomeText')) {
    const name = localStorage.getItem('name') || "User";
    document.getElementById('welcomeText').innerText = `Welcome, ${name}!`;
}

// Roadmap Logic
function showRoadmap() {
    const skill = document.getElementById('roadmapSelect').value;
    const display = document.getElementById('roadmapDisplay');
    display.classList.remove('hidden');
    
    const roadmaps = {
        web: "<b>Phase 1:</b> HTML/CSS/JS <br> <b>Phase 2:</b> React or Vue <br> <b>Phase 3:</b> Backend (Node/Express)",
        data: "<b>Phase 1:</b> Python & SQL <br> <b>Phase 2:</b> Statistics & Math <br> <b>Phase 3:</b> Machine Learning/AI",
        cyber: "<b>Phase 1:</b> Networking Basics <br> <b>Phase 2:</b> Linux & Security Tools <br> <b>Phase 3:</b> Ethical Hacking Certs"
    };
    display.innerHTML = roadmaps[skill] || "Please select a skill.";
}

// Placement Logic
const skillChecks = document.querySelectorAll('.skill-check');
if (skillChecks) {
    skillChecks.forEach(check => {
        check.addEventListener('change', () => {
            const levelSection = document.getElementById('levelSection');
            const levelInputs = document.getElementById('levelInputs');
            levelSection.classList.remove('hidden');
            
            levelInputs.innerHTML = "";
            document.querySelectorAll('.skill-check:checked').forEach(s => {
                levelInputs.innerHTML += `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin:10px 0;">
                        <span>${s.value}</span>
                        <select class="level-select" data-skill="${s.value}" style="width: 60%;">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Pro">Pro</option>
                        </select>
                    </div>`;
            });
        });
    });
}

function generateJobs() {
    const jobList = document.getElementById('jobList');
    document.getElementById('jobResults').classList.remove('hidden');
    jobList.innerHTML = ""; // Clear
    
    const roles = [
        { title: "Backend Developer", icon: "⚙️" },
        { title: "Systems Engineer", icon: "🖥️" },
        { title: "Full Stack Dev", icon: "🌐" }
    ];

    roles.forEach(role => {
        jobList.innerHTML += `
            <div class="option-card" onclick="finalStep('${role.title}')">
                <h3>${role.icon}</h3>
                <p>${role.title}</p>
            </div>`;
    });
}

function finalStep(role) {
    localStorage.setItem('selectedRole', role);
    window.location.href = 'result.html';
}

// Result Page Logic
if (document.getElementById('finalRole')) {
    const role = localStorage.getItem('selectedRole');
    document.getElementById('finalRole').innerText = role;
    const advice = document.getElementById('advice');
    
    advice.innerHTML = `
        <p>✅ <b>Focus:</b> Advanced project implementation.</p>
        <p>✅ <b>Next Step:</b> Contribution to Open Source.</p>
        <p>✅ <b>Cert:</b> Look into AWS or Google Cloud certification for ${role}.</p>
    `;
}