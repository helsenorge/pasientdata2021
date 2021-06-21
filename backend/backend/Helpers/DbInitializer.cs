﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Helpers
{
    public class DbInitializer
    {
        public static void Initialize(DataContext context)
        {
            context.Database.Migrate();
        }
    }
}