import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface UsersPageProps {
    posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;