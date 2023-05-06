import Section from "./Section";
import { useState } from "react";

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("");

  return (
    <div>
      <h1 className="m-2  font-bold text-4xl">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optio!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optio"
        }
        isVisible={sectionConfig === "about"}
        setIsVisible={() => {
          sectionConfig !== "about"
            ? setSectionConfig("about")
            : setSectionConfig("");
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optio!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optio"
        }
        isVisible={sectionConfig === "team"}
        setIsVisible={() => {
          sectionConfig !== "team"
            ? setSectionConfig("team")
            : setSectionConfig("");
        }}
      />
      <Section
        title={"Carrers Instamart"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optio!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a aliquid aut voluptatem doloribus distinctio, molestiae tenetur nesciunt officia commodi quo nulla non, adipisci perspiciatis quaerat sunt neque dolorum officiis voluptate veniam veritatis assumenda totam. Possimus quaerat recusandae ea optio"
        }
        isVisible={sectionConfig === "career"}
        setIsVisible={() => {
          sectionConfig !== "career"
            ? setSectionConfig("career")
            : setSectionConfig("");
        }}
      />
    </div>
  );
};

export default Instamart;
