function sortTickets(tickets, criteria) {
    var ticketList = [];
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var ticketStr = tickets_1[_i];
        var _a = ticketStr.split("|"), destination = _a[0], priceStr = _a[1], status_1 = _a[2];
        var price = parseFloat(priceStr);
        var ticket = {
            destination: destination,
            price: price,
            status: status_1,
        };
        ticketList.push(ticket);
    }
    switch (criteria) {
        case "destination":
            ticketList.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case "price":
            ticketList.sort(function (a, b) { return a.price - b.price; });
            break;
        case "status":
            ticketList.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
        default:
            break;
    }
    return ticketList;
}
var tickets = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var criteria = "destination";
var sortedTickets = sortTickets(tickets, criteria);
console.log(sortedTickets);
