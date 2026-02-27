import { createBrowserRouter } from "react-router-dom";
import PostsPage from "../../../pages/PostsPage";
import MainLayout from "../../../shared/layouts/MainLayout";
import HomePage from "../../../pages/HomePage";
import AlbumsPage from "../../../pages/AlbumsPage";
import PostPage from "../../../pages/PostPage";
import UserPostsPage from "../../../pages/UserPostsPage";
import UserTodosPage from "../../../pages/UserTodosPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            
            { path: "posts", element: <PostsPage /> },
            { path: "posts/:id", element: <PostPage /> },
            
            { path: "users/:id/posts", element: <UserPostsPage /> },
            { path: "users/:id/todos", element: <UserTodosPage /> },
            { path: "users/:id/albums", element: <UserAlbumsPage /> },
            
            { path: "albums/:id/photos", element: <AlbumPhotosPage /> },
            { path: "albums", element: <AlbumsPage /> },
        ]
    }
])