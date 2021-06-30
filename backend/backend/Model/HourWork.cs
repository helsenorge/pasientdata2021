

using System;

namespace backend.Model
{
    public class HourWork
    {
        public int Id { get; set; }
        public int DailyWorkId { get; set; }
        public DateTime HourStart { get; set; }
        public DateTime HourEnd { get; set; }
        public int LowHeartRate { get; set; }
        public int HighHeartRate { get; set; }
        public int Steps { get; set; }


    }
}
