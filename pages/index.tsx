import { GetServerSideProps, NextPage } from "next";

interface ApiFetchProps {
  message: string;
  data: {
    example: string;
  };
}

interface Props {
  responseData: ApiFetchProps;
}

const ApiFetch: NextPage<Props> = ({ responseData }) => {
  return (
    <div>
      <h1>Server-Side Rendered Page with API Data</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const headers = {
    Authorization: `Bearer MyTOKEN###4354`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch("apiAddress", { headers });

    const responseData: ApiFetchProps = await response.json();

    return {
      props: {
        responseData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        responseData: { message: "Error fetching data", data: { example: "" } },
      },
    };
  }
};

export default ApiFetch;
