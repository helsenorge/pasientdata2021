using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "public");

            migrationBuilder.CreateTable(
                name: "Friendships",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Friendships", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Trips",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    TripDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trips", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Username = table.Column<string>(type: "TEXT", nullable: true),
                    GoogleId = table.Column<string>(type: "TEXT", nullable: true),
                    Mail = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TripData",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TripId = table.Column<int>(type: "INTEGER", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TripData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TripData_Trips_TripId",
                        column: x => x.TripId,
                        principalSchema: "public",
                        principalTable: "Trips",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FriendRequests",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserSenderId = table.Column<int>(type: "INTEGER", nullable: false),
                    UserReceiverId = table.Column<int>(type: "INTEGER", nullable: false),
                    SentAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FriendRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FriendRequests_Users_UserReceiverId",
                        column: x => x.UserReceiverId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FriendRequests_Users_UserSenderId",
                        column: x => x.UserSenderId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TripRequests",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    TripId = table.Column<int>(type: "INTEGER", nullable: false),
                    SentAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TripRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TripRequests_Trips_TripId",
                        column: x => x.TripId,
                        principalSchema: "public",
                        principalTable: "Trips",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TripRequests_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserHasFriendships",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    FriendshipId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserHasFriendships", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserHasFriendships_Friendships_FriendshipId",
                        column: x => x.FriendshipId,
                        principalSchema: "public",
                        principalTable: "Friendships",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserHasFriendships_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserHasTrips",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TripId = table.Column<int>(type: "INTEGER", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    IsCreator = table.Column<bool>(type: "INTEGER", nullable: false),
                    AcceptedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserHasTrips", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserHasTrips_Trips_TripId",
                        column: x => x.TripId,
                        principalSchema: "public",
                        principalTable: "Trips",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserHasTrips_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Destionations",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TripDataId = table.Column<int>(type: "INTEGER", nullable: false),
                    StopDestionation = table.Column<string>(type: "TEXT", nullable: true),
                    StopNumber = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destionations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Destionations_TripData_TripDataId",
                        column: x => x.TripDataId,
                        principalSchema: "public",
                        principalTable: "TripData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Destionations_TripDataId",
                schema: "public",
                table: "Destionations",
                column: "TripDataId");

            migrationBuilder.CreateIndex(
                name: "IX_FriendRequests_UserReceiverId",
                schema: "public",
                table: "FriendRequests",
                column: "UserReceiverId");

            migrationBuilder.CreateIndex(
                name: "IX_FriendRequests_UserSenderId",
                schema: "public",
                table: "FriendRequests",
                column: "UserSenderId");

            migrationBuilder.CreateIndex(
                name: "IX_TripData_TripId",
                schema: "public",
                table: "TripData",
                column: "TripId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TripRequests_TripId",
                schema: "public",
                table: "TripRequests",
                column: "TripId");

            migrationBuilder.CreateIndex(
                name: "IX_TripRequests_UserId",
                schema: "public",
                table: "TripRequests",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserHasFriendships_FriendshipId",
                schema: "public",
                table: "UserHasFriendships",
                column: "FriendshipId");

            migrationBuilder.CreateIndex(
                name: "IX_UserHasFriendships_UserId",
                schema: "public",
                table: "UserHasFriendships",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserHasTrips_TripId",
                schema: "public",
                table: "UserHasTrips",
                column: "TripId");

            migrationBuilder.CreateIndex(
                name: "IX_UserHasTrips_UserId",
                schema: "public",
                table: "UserHasTrips",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destionations",
                schema: "public");

            migrationBuilder.DropTable(
                name: "FriendRequests",
                schema: "public");

            migrationBuilder.DropTable(
                name: "TripRequests",
                schema: "public");

            migrationBuilder.DropTable(
                name: "UserHasFriendships",
                schema: "public");

            migrationBuilder.DropTable(
                name: "UserHasTrips",
                schema: "public");

            migrationBuilder.DropTable(
                name: "TripData",
                schema: "public");

            migrationBuilder.DropTable(
                name: "Friendships",
                schema: "public");

            migrationBuilder.DropTable(
                name: "Users",
                schema: "public");

            migrationBuilder.DropTable(
                name: "Trips",
                schema: "public");
        }
    }
}
