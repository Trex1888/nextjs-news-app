function Feed({ pageNumber, articles }) {
  export const getServerSideProps = (async = (pageContext) => {
    const pageNumber = pageContext.query.pageid;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
      return {
        props: {
          artcles: [],
          pageNumber: 1,
        },
      };
    }
  });
}

export default Feed;
