{
  "users" : {
    "admin" : {
      "username" : "admin",
      "password" : "{bcrypt}$2a$10$tkb1V7JBtkZWp1BpQkbt7ejGAtobZ4eD5wP1I7LoiV7L60kf4JNQG",
      "grantedAuthorities" : [ "ROLE_ADMIN" ],
      "appSettings" : {
        "DEFAULT_INFERENCE" : true,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true,
        "DEFAULT_SAMEAS" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "EXECUTE_COUNT" : true
      },
      "dateCreated" : 1677753879358
    }
  },
  "import.server" : { },
  "import.local" : {
    "userRepo;;DataHN1.nt" : {
      "name" : "DataHN1.nt",
      "status" : "DONE",
      "message" : "Imported successfully in 22s.",
      "context" : "",
      "replaceGraphs" : [ ],
      "baseURI" : "file:/uploaded/generated/DataHN1.nt",
      "forceSerial" : false,
      "type" : "file",
      "format" : null,
      "data" : "00d9a817-6098-4e01-9fa0-08716693cd7b",
      "timestamp" : 1677754270541,
      "parserSettings" : {
        "preserveBNodeIds" : false,
        "failOnUnknownDataTypes" : false,
        "verifyDataTypeValues" : false,
        "normalizeDataTypeValues" : false,
        "failOnUnknownLanguageTags" : false,
        "verifyLanguageTags" : true,
        "normalizeLanguageTags" : false,
        "stopOnError" : true
      },
      "requestIdHeadersToForward" : null
    },
    "userRepo;;AnnotationHN1.nt" : {
      "name" : "AnnotationHN1.nt",
      "status" : "DONE",
      "message" : "Imported successfully in 2s.",
      "context" : "http://data.local/",
      "replaceGraphs" : [ ],
      "baseURI" : "file:/uploaded/generated/AnnotationHN1.nt",
      "forceSerial" : false,
      "type" : "file",
      "format" : null,
      "data" : "de32e3ee-d1a0-49ac-9938-e4a991048ead",
      "timestamp" : 1677756160588,
      "parserSettings" : {
        "preserveBNodeIds" : false,
        "failOnUnknownDataTypes" : false,
        "verifyDataTypeValues" : false,
        "normalizeDataTypeValues" : false,
        "failOnUnknownLanguageTags" : false,
        "verifyLanguageTags" : true,
        "normalizeLanguageTags" : false,
        "stopOnError" : true
      },
      "requestIdHeadersToForward" : null
    }
  },
  "properties" : {
    "current.location" : ""
  },
  "user_queries" : {
    "admin" : {
      "SPARQL Select template" : {
        "name" : "SPARQL Select template",
        "body" : "SELECT ?s ?p ?o\nWHERE {\n\t?s ?p ?o .\n} LIMIT 100",
        "shared" : false
      },
      "Clear graph" : {
        "name" : "Clear graph",
        "body" : "CLEAR GRAPH <http://example>",
        "shared" : false
      },
      "Add statements" : {
        "name" : "Add statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nINSERT DATA\n      {\n      GRAPH <http://example> {\n          <http://example/book1> dc:title \"A new book\" ;\n                                 dc:creator \"A.N.Other\" .\n          }\n      }",
        "shared" : false
      },
      "Remove statements" : {
        "name" : "Remove statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nDELETE DATA\n{\nGRAPH <http://example> {\n    <http://example/book1> dc:title \"A new book\" ;\n                           dc:creator \"A.N.Other\" .\n    }\n}",
        "shared" : false
      }
    }
  }
}