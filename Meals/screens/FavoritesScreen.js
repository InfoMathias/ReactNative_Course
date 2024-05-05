import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals}></MealsList>;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
