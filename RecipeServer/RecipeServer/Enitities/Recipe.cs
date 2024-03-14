namespace RecipeServer.Enitities
{
    public class Recipe
    {
  
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int PreparationTime { get; set; }
        
        private int difficultyLevel;

        public int DifficultyLevel
        {
            get { return difficultyLevel; }
            set
            {
                if (value > 0 && value <= 5)
                    difficultyLevel = value;
            }
        }

        public DateTime DateAdded { get; set; }
        public List<string> Ingredients { get; set; }

        public List<string> Instructions { get; set; }
        public int UserId { get; set; }
        public string RoutingImage { get; set; }

    }
}
