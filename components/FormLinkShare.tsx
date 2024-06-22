"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImShare } from "react-icons/im";
import { toast } from "./ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Copy } from "lucide-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LineShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  LineIcon,
} from "react-share";

function FormLinkShare({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input value={shareLink} readOnly />
      <Button
        className="w-[180px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: "Copied!",
            description: "Link copied to clipboard",
          });
        }}
      >
        <Copy className="mr-2 h-4 w-4" />
        Copy Link
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-[180px]">
            <ImShare className="mr-2 h-4 w-4" />
            Share Link
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Share Form Link</DialogTitle>
            <DialogDescription className="flex flex-wrap items-center justify-center gap-3 max-w-[200px] mx-auto pt-3">
              <FacebookShareButton url={shareLink}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <LinkedinShareButton url={shareLink}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <PinterestShareButton url={shareLink} media={shareLink}>
                <PinterestIcon size={40} round />
              </PinterestShareButton>
              <RedditShareButton url={shareLink}>
                <RedditIcon size={40} round />
              </RedditShareButton>
              <TelegramShareButton url={shareLink}>
                <TelegramIcon size={40} round />
              </TelegramShareButton>
              <TwitterShareButton url={shareLink}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <WhatsappShareButton url={shareLink}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
              <LineShareButton url={shareLink}>
                <LineIcon size={40} round />
              </LineShareButton>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormLinkShare;
