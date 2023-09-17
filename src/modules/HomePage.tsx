import React, { ChangeEvent, useEffect, useState } from "react";
import { fetchAllHeroes } from "@/utils/fetchAllHeroes";
import { SuperHero } from "@/types/SuperHero";
import { ListOfHeroes } from "@/components/ListOfHeroes";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

export const HomePage: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<SuperHero[] | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllHeroes(currentPage, 4);

        setSuperheroes(response.superheroes);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Superheroes
      </Typography>

      {superheroes && <ListOfHeroes superheroes={superheroes} />}

      {superheroes && (
        <Pagination
          sx={{ mt: 4, display: "flex", justifyContent: "center" }}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </>
  );
};
