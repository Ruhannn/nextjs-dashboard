import { Avatar, Card, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
export const CardTransactions = () => {
  return (
    <Card
      css={{
        mw: "375px",
        height: "auto",
        bg: "$accents0",
        borderRadius: "$xl",
        // alignContent: 'start',
        justifyContent: "start",
        px: "$6",
      }}>
      <Card.Body css={{ py: "$10" }}>
        <Flex css={{ gap: "$5" }} justify={"center"}>
          <Text h3 css={{ textAlign: "center" }}>
            Latest Transactions
          </Text>
        </Flex>
        <Flex
          css={{ gap: "$6", py: "$4" }}
          // align={'center'}

          direction={"column"}>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://res.cloudinary.com/ddcjzcoys/image/upload/v1706229843/lqemhivo7ardngzjythn.png"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Swampy
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              4500 USD
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              9/20/2021
            </Text>
          </Flex>

          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230664/fybainccijiisltjyhik.png"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Totoro
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              4500 USD
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              9/20/2021
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230639/fnhnsq6krrvl9dpyujhh.png"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Monty
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              1500 USD
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              2/20/2022
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230633/lz31mtbhkj3jqfoi2art.png"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Raspberry
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              200 USD
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              3/20/2022
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230597/q6beseefjitjbgibcmkl.png"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Alice
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              2444 USD
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              5/20/2022
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230681/foqe8oyyuylwh4yrzym8.png"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Unknown
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              3000 USD
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              12/20/2022
            </Text>
          </Flex>
        </Flex>
      </Card.Body>
    </Card>
  );
};
