import { Route, Routes } from "react-router-dom"
import AddStories from "./components/AddStories/AddStories"
import StoryTracker from "./components/StoryTracker/StoryTracker"

const App = () => {
  return (
    <div>
      {/* <AddStories /> */}
      <Routes>
        <Route
          element={<AddStories isEditMode={false} />}
          path="/addStory"
        />
        <Route
          element={<StoryTracker />}
          path="/home"
        />

        <Route
          element={<AddStories isEditMode={true} />}
          path="/editStory"
        />
      </Routes>
    </div>
  )
}

export default App