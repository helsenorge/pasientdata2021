using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class PartChallenge
    {
        public int Id { get; set; }
        public int ChallengeId { get; set; }
        public string GoalDescription { get; set; }
        public int steps { get; set; }
    }
}
