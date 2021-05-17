import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = () => {
  return (
    <div className="BookDetails">
      <p>Book details here</p>
    </div>
  );
};

export default BookDetails;
