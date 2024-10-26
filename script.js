function priceStep() {
    let step = document.getElementById('step').value;
    let percentage = document.getElementById('percantage');
    percentage.innerHTML = step + '%';
}
function concertPrice() {
    let singerName = document.getElementById('singerName').value;
    let concertPriceElement = document.getElementById('price');
    let step = document.getElementById('step').value;
    const Rihanna_concert = 2000000;
    const Eminem_concert = 220000;
    const Selena_concert = 300000;
    const BTS_concert = 3000000;
    const BlackPink_concert = 2500000;
    const Cent_concert = 400000;
    const Katy_concert = 6000000;
    let bestPrice;
    if (singerName === 'rih') {
        bestPrice = Rihanna_concert;
    } else if (singerName === 'Emin') {
        bestPrice = Eminem_concert;
    } else if (singerName === 'sel') {
        bestPrice = Selena_concert;
    } else if (singerName === 'bts') {
        bestPrice = BTS_concert;
    } else if (singerName === 'blck') {
        bestPrice = BlackPink_concert;
    } else if (singerName === 'cent') {
        bestPrice = Cent_concert;
    } else if (singerName === 'Kat') {
        bestPrice = Katy_concert;
    } else {
        concertPriceElement.value = '';
        return;
    }
    let finalPrice = bestPrice * (100 - step) / 100;
    concertPriceElement.value = finalPrice; 
    priceStep(); 
    
}
