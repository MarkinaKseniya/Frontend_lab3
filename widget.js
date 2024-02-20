const axios = require('axios');


async function searchVacancies(keyword) {
    try {
        const response = await axios.get("https://api.hh.ru/vacancies",
        {
            params: {
                text: keyword,
            }
        });

        return response.data.items;
    } 
    catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

searchVacancies('developer')
    .then(vacancies => {
        console.log('Найденные вакансии:');
        vacancies.forEach(vacancy => {
            console.log(vacancy.name);
            console.log(vacancy.snippet.requirement);
            console.log('---');
        });
    });

