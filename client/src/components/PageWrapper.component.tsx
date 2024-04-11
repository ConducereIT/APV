import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface PageWrapperProps {
  title: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageWrapper;
