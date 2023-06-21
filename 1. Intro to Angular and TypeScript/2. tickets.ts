type Ticket = {
    destination: string;
    price: number;
    status: string;
  };
  
  function sortTickets(tickets: string[], criteria: string): Ticket[] {
    const ticketList: Ticket[] = [];
  
    for (const ticketStr of tickets) {
      const [destination, priceStr, status] = ticketStr.split("|");
      const price = parseFloat(priceStr);
      const ticket: Ticket = {
        destination,
        price,
        status,
      };
      ticketList.push(ticket);
    }
  
    switch (criteria) {
      case "destination":
        ticketList.sort((a, b) => a.destination.localeCompare(b.destination));
        break;
      case "price":
        ticketList.sort((a, b) => a.price - b.price);
        break;
      case "status":
        ticketList.sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        break;
    }
  
    return ticketList;
  }
  
 
  const tickets: string[] = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
   
  ];
  const criteria: string = "price";
  
  const sortedTickets = sortTickets(tickets, criteria);
  console.log(sortedTickets);