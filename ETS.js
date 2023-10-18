function getResult() {
    const apiUrl = 'https://it-its.id/api/movies';

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            console.log(data)
            const res = JSON.parse(data);

            for(let i = 0; i < res.length; i++){
                let obj = res[i];
                const Title = obj.Title
                const Plot = obj.Plot
                let divi = `
                <div class="col-xl-6 col-md-6 mb-4">
                    <div class="card shadow h-100 py-1">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2 p-3">
                                    <div class="font-weight-bold text-black-800 mb-1">${Title}</div>
                                    <div class="text-s mb-0 font-weight-regular text-black-800">${Plot}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                document.getElementById('movieee').innerHTML = document.getElementById('movieee').innerHTML + divi;
            }
            
        })
        .catch(error => {
            console.error(error);
        })
}
