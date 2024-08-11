export default async (req, context) => {  
    return new Response('Howdy from page!');
  };
  
  export const config = {
    path: "/page"
  };
  