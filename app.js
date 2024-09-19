// Header

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
  } else {
      header.classList.remove('header-scrolled');
  }
}); 


//Events Animation
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


//Athletes Section DB
document.addEventListener('DOMContentLoaded', function() {
  const athleteList = document.getElementById('athlete-list');
  const searchInput = document.getElementById('search');

  const athletes = [
      {
          name: 'John Doe',
          sport: 'Basketball',
          achievement: 'Gold Medalist',
          imageUrl: 'path/to/image1.jpg',
          bio: 'John Doe is a renowned basketball player known for his exceptional shooting skills and leadership on the court. He led his national team to Olympic gold, inspiring a new generation of players.'
      },
      {
          name: 'Jane Smith',
          sport: 'Swimming',
          achievement: 'World Record Holder',
          imageUrl: 'path/to/image2.jpg',
          bio: 'Jane Smith is a swimming prodigy who broke multiple world records in freestyle events. Her dedication to the sport and innovative training techniques have revolutionized competitive swimming.'
      },
      {
          name: 'Michael Johnson',
          sport: 'Track and Field',
          achievement: 'Multiple Olympic Gold Medalist',
          imageUrl: 'path/to/image3.jpg'
      },
      {
          name: 'Simone Biles',
          sport: 'Gymnastics',
          achievement: 'Most Decorated American Gymnast',
          imageUrl: 'path/to/image4.jpg'
      },
      {
          name: 'Usain Bolt',
          sport: 'Sprinting',
          achievement: 'Fastest Man in the World',
          imageUrl: 'path/to/image5.jpg'
      },
      {
          name: 'Serena Williams',
          sport: 'Tennis',
          achievement: '23-time Grand Slam Champion',
          imageUrl: 'path/to/image6.jpg'
      },
      {
          name: 'Michael Phelps',
          sport: 'Swimming',
          achievement: 'Most Decorated Olympian of All Time',
          imageUrl: 'path/to/image7.jpg'
      }
  ];

  // Function to render the athletes on the page
  function renderAthletes(filteredAthletes) {
      athleteList.innerHTML = '';
      filteredAthletes.forEach(athlete => {
          const card = document.createElement('div');
          card.className = 'athlete-card';
          
          card.innerHTML = `
              <div class="athlete-image-container">
                  <img src="${athlete.imageUrl}" class="athlete-image" alt="${athlete.name}">
              </div>
              <div class="athlete-info">
                  <div class="athlete-name">${athlete.name}</div>
                  <div class="athlete-sport">${athlete.sport}</div>
                  <div class="athlete-achievement">${athlete.achievement}</div>
              </div>
          `;
          
          card.addEventListener('click', () => {
              showPopup(athlete);
          });
          
          athleteList.appendChild(card);
      });
  }

  // Initial rendering of all athletes
  renderAthletes(athletes);

  // Function to show athlete popup
  function showPopup(athlete) {
      const popup = document.createElement('div');
      popup.className = 'popup active';
      popup.innerHTML = `
          <span class="close">&times;</span>
          <div class="popup-content">
              <h2>${athlete.name}</h2>
              <p><strong>Sport:</strong> ${athlete.sport}</p>
              <p><strong>Achievement:</strong> ${athlete.achievement}</p>
              <p><strong>Biography:</strong> ${athlete.bio || 'No bio available'}</p>
          </div>
      `;
      document.body.appendChild(popup);

      popup.querySelector('.close').addEventListener('click', () => {
          document.body.removeChild(popup);
      });

      window.addEventListener('click', (event) => {
          if (event.target === popup) {
              document.body.removeChild(popup);
          }
      });
  }

  // Search functionality
  searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      const filteredAthletes = athletes.filter(athlete => {
          return (
              athlete.name.toLowerCase().includes(query) ||
              athlete.sport.toLowerCase().includes(query) ||
              athlete.achievement.toLowerCase().includes(query)
          );
      });
      renderAthletes(filteredAthletes); // Re-render the athletes based on the search input
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const data = [
      {
          country: "USA",
          goldMedals: 39,
          silverMedals: 41,
          bronzeMedals: 33,
          totalMedals: 113,
          sports: [
              { name: "Basketball", gold: 2, silver: 1, bronze: 0, total: 3 },
              { name: "Swimming", gold: 6, silver: 2, bronze: 2, total: 10 },
              { name: "Track and Field", gold: 7, silver: 4, bronze: 3, total: 14 }
          ]
      },
      {
          country: "China",
          goldMedals: 38,
          silverMedals: 32,
          bronzeMedals: 18,
          totalMedals: 88,
          sports: [
              { name: "Gymnastics", gold: 4, silver: 1, bronze: 1, total: 6 },
              { name: "Table Tennis", gold: 5, silver: 2, bronze: 1, total: 8 },
              { name: "Diving", gold: 6, silver: 4, bronze: 2, total: 12 }
          ]
      },
      {
          country: "Japan",
          goldMedals: 27,
          silverMedals: 14,
          bronzeMedals: 17,
          totalMedals: 58,
          sports: [
              { name: "Judo", gold: 9, silver: 2, bronze: 1, total: 12 },
              { name: "Wrestling", gold: 5, silver: 3, bronze: 2, total: 10 },
              { name: "Baseball", gold: 1, silver: 1, bronze: 2, total: 4 }
          ]
      },
      {
          country: "Great Britain",
          goldMedals: 22,
          silverMedals: 21,
          bronzeMedals: 22,
          totalMedals: 65,
          sports: [
              { name: "Cycling", gold: 7, silver: 4, bronze: 3, total: 14 },
              { name: "Athletics", gold: 5, silver: 3, bronze: 2, total: 10 },
              { name: "Rowing", gold: 3, silver: 2, bronze: 1, total: 6 }
          ]
      },
      {
          country: "Russia",
          goldMedals: 20,
          silverMedals: 28,
          bronzeMedals: 23,
          totalMedals: 71,
          sports: [
              { name: "Fencing", gold: 5, silver: 4, bronze: 2, total: 11 },
              { name: "Boxing", gold: 4, silver: 2, bronze: 3, total: 9 },
              { name: "Figure Skating", gold: 6, silver: 5, bronze: 4, total: 15 }
          ]
      },
      {
          country: "Germany",
          goldMedals: 18,
          silverMedals: 15,
          bronzeMedals: 12,
          totalMedals: 45,
          sports: [
              { name: "Swimming", gold: 4, silver: 2, bronze: 1, total: 7 },
              { name: "Athletics", gold: 5, silver: 4, bronze: 3, total: 12 },
              { name: "Skiing", gold: 3, silver: 3, bronze: 2, total: 8 }
          ]
      },
      {
          country: "Australia",
          goldMedals: 17,
          silverMedals: 12,
          bronzeMedals: 15,
          totalMedals: 44,
          sports: [
              { name: "Swimming", gold: 7, silver: 4, bronze: 3, total: 14 },
              { name: "Rowing", gold: 2, silver: 3, bronze: 4, total: 9 },
              { name: "Basketball", gold: 1, silver: 1, bronze: 2, total: 4 }
          ]
      },
      {
          country: "Canada",
          goldMedals: 11,
          silverMedals: 8,
          bronzeMedals: 10,
          totalMedals: 29,
          sports: [
              { name: "Ice Hockey", gold: 3, silver: 2, bronze: 1, total: 6 },
              { name: "Skiing", gold: 2, silver: 1, bronze: 3, total: 6 },
              { name: "Swimming", gold: 2, silver: 3, bronze: 2, total: 7 }
          ]
      },
      {
          country: "South Korea",
          goldMedals: 13,
          silverMedals: 10,
          bronzeMedals: 9,
          totalMedals: 32,
          sports: [
              { name: "Archery", gold: 4, silver: 1, bronze: 2, total: 7 },
              { name: "Taekwondo", gold: 2, silver: 2, bronze: 3, total: 7 },
              { name: "Speed Skating", gold: 4, silver: 3, bronze: 2, total: 9 }
          ]
      }
  ];

  const tbody = document.querySelector('#medal-table tbody');

  data.forEach(entry => {
      const row = document.createElement('tr');
      row.classList.add('country-row');
      row.innerHTML = `
          <td class="country">${entry.country}</td>
          <td class="gold">${entry.goldMedals}</td>
          <td class="silver">${entry.silverMedals}</td>
          <td class="bronze">${entry.bronzeMedals}</td>
          <td class="total">${entry.totalMedals}</td>
          <td><button class="toggle">Details</button></td>
      `;

      const detailsRow = document.createElement('tr');
      detailsRow.classList.add('details-row', 'hidden');
      detailsRow.innerHTML = `
          <td colspan="6">
              <table class="details-table">
                  <thead>
                      <tr>
                          <th>Sport</th>
                          <th class="gold">Gold</th>
                          <th class="silver">Silver</th>
                          <th class="bronze">Bronze</th>
                          <th class="total">Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${entry.sports.map(sport => `
                          <tr>
                              <td>${sport.name}</td>
                              <td class="gold">${sport.gold}</td>
                              <td class="silver">${sport.silver}</td>
                              <td class="bronze">${sport.bronze}</td>
                              <td class="total">${sport.total}</td>
                          </tr>
                      `).join('')}
                  </tbody>
              </table>
          </td>
      `;
      tbody.appendChild(row);
      tbody.appendChild(detailsRow);

      row.querySelector('.toggle').addEventListener('click', () => {
          detailsRow.classList.toggle('hidden');
      });
  });
});

