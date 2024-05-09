using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class RequestEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "requestEntities",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<string>(type: "TEXT", nullable: true),
                    Day = table.Column<string>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    RoomNumber = table.Column<string>(type: "TEXT", nullable: true),
                    Destination = table.Column<string>(type: "TEXT", nullable: true),
                    CurrentTime = table.Column<string>(type: "TEXT", nullable: true),
                    InTime = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_requestEntities", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "requestEntities");
        }
    }
}
