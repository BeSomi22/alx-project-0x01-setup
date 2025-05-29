import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData } from "@/interfaces";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UserData[]>(posts); // include fetched users initially
  const [isOpen, setIsOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, { ...newUser, id: Date.now() }]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        {showModal && (
          <UserModal
            isOpen={isOpen}
            onClose={() => setShowModal(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
      <Footer />
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
