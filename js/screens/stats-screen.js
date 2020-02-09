import StatsView from "./View/stats-view";
import showDisplay from "../showDisplay";

export default class StatsScreen{
  showStats(model){
    let screen = new StatsView(model);
    showDisplay(screen.element);
  }
};
