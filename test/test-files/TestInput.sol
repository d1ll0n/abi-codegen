pragma solidity ^0.6.0;

library TestInput {
  enum ABC { a, b }
  
  struct TestWrapped {
    uint32 a;
    bytes32 b;
    bytes32 c;
    uint8 d;
    ABC e;
  }

  struct TestWrapper {
    TestWrapped a;
    TestWrapped b;
    bytes32[3] x;
  }
}