
using System.ComponentModel.DataAnnotations;

namespace PlanePort.Models {

    using Enums;
    public class Ticket {

        [Key]
        public long TicketId { get; set; }

        public long FlightId { get; set; }

        public DateTime DepartureTime { get; set; }

        public DateTime ArrivalTime { get; set; }

        public int SeatNumber { get; set; }

        public TicketStatus Status { get; set; } 
        
    }
}