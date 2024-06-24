function searchCondition() {
    const input = document.getElementById('countriesInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('/Users/anocreates/before_you_travel/travelRecommendation/style/travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);

        if (condition) {
          const name = countries.name.join(', ');
          const cities = countries.cities.join(', ');
          const description = countries.description(', ');

          resultDiv.innerHTML += `<h2>${cities.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Name:</strong> ${name}</p>`;
          resultDiv.innerHTML += `<p><strong>Cities:</strong> ${cities}</p>`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
        } else {
          resultDiv.innerHTML = 'Search criteria not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCountries);