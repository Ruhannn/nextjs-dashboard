import { Avatar, Card, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
const pictureUsers = [
  "https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230620/w8nliggagxi9be26spj7.png", // w8nliggagxi9be26spj7.png (512×512)
  "https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230606/djfwbmlpagkbly3rwvph.png", // djfwbmlpagkbly3rwvph.png (512×512)
  "https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230672/jbn2dwcafzlumsh4jz1o.png", // jbn2dwcafzlumsh4jz1o.png (512×512)
  "https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230546/u7x81mi2lrj42jiiykv1.png", // u7x81mi2lrj42jiiykv1.png (512×512)
  "https://res.cloudinary.com/ddcjzcoys/image/upload/v1706230614/axkc4phw1qmbox8nfvwy.png", // axkc4phw1qmbox8nfvwy.png (512×512)
];

export const CardAgents = () => {
  return (
    <Card
      css={{
        mw: "375px",
        bg: "$accents0",
        height: "275px",
        borderRadius: "$xl",
        alignContent: "center",
        justifyContent: "center",
        px: "$6",
      }}>
      <Card.Body css={{ py: "$10", gap: "$4" }}>
        <Flex
          css={{
            width: "100%",
          }}
          justify={"center"}>
          <Flex
            align={"center"}
            direction={"row"}
            justify={"center"}
            css={{
              width: "150px",
              border: "2.5px dashed $border",
              borderRadius: "$base",
            }}>
            {"⭐"}
            <Box>
              <Flex direction={"column"}>
                <Text h3 css={{ margin: 0 }}>
                  Agents
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex css={{ gap: "$6", py: "$4" }} align={"center"}>
          <Text span size={"$xs"}>
            Meet your agenda and see their ranks to get the best results
          </Text>
        </Flex>
        <Flex css={{ pt: "$4" }} align={"center"} justify={"center"}>
          <Avatar.Group count={12}>
            {pictureUsers.map((url, index) => (
              <Avatar
                key={index}
                size="lg"
                pointer
                src={url}
                bordered
                color="gradient"
                stacked
              />
            ))}
          </Avatar.Group>
        </Flex>
      </Card.Body>
    </Card>
  );
};
