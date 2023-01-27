import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import {  RiPieChart2Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import FilterBar from "./FilterBar";

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={"8"}
      p="8"
      boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
      alignItems="flex-start"
    >
      <LinkButton
        url={"/intensity"}
        Icon={RiPieChart2Fill}
        text="Intensity"
        active={location.pathname === "/intensity"}
      />
      <LinkButton
        url={"/likelihood"}
        Icon={RiPieChart2Fill}
        text="Likelihood"
        active={location.pathname === "/likelihood"}
      />
      <LinkButton
        url={"/relevance"}
        Icon={RiPieChart2Fill}
        text="Relevance"
        active={location.pathname === "/relevance"}
      />
      <LinkButton
        url={"/year"}
        Icon={RiPieChart2Fill}
        text="Year"
        active={location.pathname === "/year"}
      />
      <LinkButton
        url={"/country"}
        Icon={RiPieChart2Fill}
        text="Country"
        active={location.pathname === "/country"}
      />
      <LinkButton
        url={"/topics"}
        Icon={RiPieChart2Fill}
        text="Topics"
        active={location.pathname === "/topics"}
      />
      <LinkButton
        url={"/region"}
        Icon={RiPieChart2Fill}
        text="Region"
        active={location.pathname === "/region"}
      />
       <FilterBar />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`${url}`}>
      <Button
        fontSize={"lg"}
        variant={"ghost"}
        colorScheme={active ? "blue" : ""}
      >
        <Icon style={{ margin: "4px" }} />
        {text}
      </Button>
    </Link>
  );
}
