import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableInfo } from "@/constants";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function TableDemo() {
  return (
    <Table className="overflow-x-auto whitespace-nowrap">
      <TableHeader>
        <TableRow>
          <TableHead>no</TableHead>
          <TableHead className="">name</TableHead>
          <TableHead>last price</TableHead>
          <TableHead>change</TableHead>
          <TableHead>market stats</TableHead>
          <TableHead>trade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody id="scroll">
        {TableInfo.map((coin) => (
          <TableRow key={coin.id}>
            <TableCell className="font-RegularRoboto text-lg text-[#B6B6B6]">
              {coin.id}
            </TableCell>
            <TableCell className="flex min-w-max flex-1 items-center gap-5 lg:min-w-[400px]">
              <img
                src={coin.img}
                className="size-11"
                alt={`${coin.name} img`}
              />
              <div className="flex items-center gap-5">
                <span className="font-RegularRoboto text-[17px] tracking-wider text-[#B6B6B6]">
                  {coin.name}
                </span>
                <div className="flex items-center gap-3">
                  <Separator className="h-[24px] w-[1px] bg-[#403A3A]" />
                  <span className="text-[17px] uppercase text-[#B6B6B6]">
                    {coin.symbol}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-RegularRoboto text-[17px] text-[#B6B6B6]">
              ${coin.lastPrice}
            </TableCell>
            <TableCell className="font-RegularRoboto text-[17px] text-[#B6B6B6]">
              {coin.change}%
            </TableCell>
            <TableCell>
              <img
                src={coin.marketStats}
                alt={`${coin.name} marketStats`}
                className="h-[40px]"
              />
            </TableCell>
            <TableCell>
              <Button
                className="h-[35px] rounded-xl bg-[#0FAE96] px-6 text-[15px]"
                size="sm"
              >
                Trade
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>
        <span className="flex font-SemiBold text-[16px] text-[#0FAE96] underline underline-offset-2">
          See All Coins
        </span>
      </TableCaption>
    </Table>
  );
}
