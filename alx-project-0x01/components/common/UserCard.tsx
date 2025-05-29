import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address, company }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-1">{name}</h2>
            <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {email}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {phone}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Website:</strong> {website}</p>
            <p className="text-sm text-gray-600 mb-1">
                <strong>Address:</strong> {address.street}, {address.city}
            </p>
            <p className="text-sm text-gray-600"><strong>Company:</strong> {company.name}</p>
        </div>
    )
}
export default UserCard;