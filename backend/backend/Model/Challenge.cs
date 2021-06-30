

using System;
using System.Collections.Generic;

namespace backend.Model
{
    public class Challenge
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public int Streak { get; set; }
        public string GoalDescription { get; set; }
        public List<PartChallenge> PartChallenges { get; set; }

    }
}
