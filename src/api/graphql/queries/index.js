import { gql } from "@apollo/client";

export const GET_POOLS = gql`
  mutation AllDocuments($input: AllDocumentsInput!) {
    response(input: $input)
      @rest(
        type: "Documents"
        method: "POST"
        path: "/api/search/getdocuments"
      ) {
      count
      facets
      results
      tags
      tokens
    }
  }
`;

export const DOCUMENT_GET = gql`
  mutation Document($input: DocumentInput!) {
    response(input: $input)
      @rest(
        type: "Document"
        method: "POST"
        path: "/api/search/getdocumentbyid"
      ) {
      count
      result
      tokens
      tags
    }
  }
`;

export const SEARCH_NEWS = gql`
  mutation Search($input: SearchNewsInput!) {
    response(input: $input)
      @rest(type: "Search", method: "POST", path: "/api/news/search") {
      count
      result
      tokens
      tags
    }
  }
`;

//
// export const POST_IMAGE = gql`
//   mutation PostImage($endpoint: String!, $input: PostImageInput!) {
//     image(input: $input)
//       @rest(type: "Image", method: "POST", path: "", endpoint: $endpoint)
//   }
// `;
