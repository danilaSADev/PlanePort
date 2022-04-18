﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlanePort.Models;

public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; } = string.Empty;

    public string LastName {get; set; } = string.Empty;

    [NotMapped]
    public string FullName => $"{FirstName} {LastName}"; 
}
