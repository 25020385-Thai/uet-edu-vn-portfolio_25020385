/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
// @ts-ignore
import profileImg from "./assets/images/regenerated_image_1780866686342.jpg";
// @ts-ignore
import step1Img from "./assets/images/regenerated_image_1780876177136.png";
// @ts-ignore
import step2Img from "./assets/images/regenerated_image_1780876049994.png";
// @ts-ignore
import step3Img from "./assets/images/regenerated_image_1780873171225.png";
// @ts-ignore
import step4Img from "./assets/images/regenerated_image_1780873332799.png";
// @ts-ignore
import task1BannerImg from "./assets/images/regenerated_image_1780868450443.png";
// @ts-ignore
import task2Step2Img from "./assets/images/regenerated_image_1780876672677.png";
// @ts-ignore
import task2Step3Img from "./assets/images/regenerated_image_1780877232665.png";
// @ts-ignore
import task2Step4Img from "./assets/images/regenerated_image_1780877233498.png";
// @ts-ignore
import task2Step5Img from "./assets/images/regenerated_image_1780877234138.png";
// @ts-ignore
import task3Step1Img from "./assets/images/regenerated_image_1780877493429.png";
// @ts-ignore
import task3Step2Img from "./assets/images/regenerated_image_1780878413503.png";
// @ts-ignore
import task3Step3Img from "./assets/images/regenerated_image_1780878559090.png";
// @ts-ignore
import task3Step4Img from "./assets/images/regenerated_image_1780877837173.png";
// @ts-ignore
import task4Step1Img from "./assets/images/regenerated_image_1780877993051.png";
// @ts-ignore
import task4Step2Img from "./assets/images/regenerated_image_1780878104216.png";
// @ts-ignore
import task4Step4Img from "./assets/images/regenerated_image_1780878254031.png";
import { BrowserRouter, Routes, Route, Link, useLocation, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  LucideIcon,
  Monitor,
  Database,
  BrainCircuit,
  MessagesSquare,
  Users,
  Gavel,
  Palette,
  Lock,
  Terminal,
  Mail,
  Share2,
  Printer,
  Github,
  ShieldCheck,
  CheckCircle,
  ShieldAlert,
  Folder,
  FolderOpen,
  FileText,
  ArrowUpRight,
  ExternalLink,
  Globe,
  BookOpen,
  Sparkles,
  GraduationCap,
  Check,
  Wrench,
  Cpu,
  LayoutGrid,
  ClipboardList,
  Lightbulb,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// --- Types ---
interface Task {
  id: number;
  title: string;
  category: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  challenge: string;
  solution: string;
  tools: string[];
  image?: string;
  tags: string[];
}

// --- Constants ---
const tasks: Task[] = [
  {
    id: 1,
    title: "BT1 - Chương 1: Thao tác cơ bản với tệp tin và thư mục",
    category: "Kỹ năng hệ thống",
    summary: "Xây dựng hệ thống cấu trúc thư mục logic với quy tắc đặt tên (Naming Convention) chuẩn hóa. Áp dụng tư duy phân loại đa tầng giúp tối ưu hóa việc tìm kiếm và bảo mật dữ liệu cá nhân.",
    description: "Nắm vững lý thuyết quản lý tệp tin, đường dẫn tuyệt đối/tương đối, cấu trúc dạng cây và quy cách phân loại thông tin khoa học nhằm hỗ trợ quy trình tự học lâu dài.",
    icon: Monitor,
    challenge: "Quá trình phân loại và chuẩn hóa số lượng tệp tin khổng lồ đòi hỏi tính hệ thống và kỷ luật đặt tên cao.",
    solution: "Triển khai sơ đồ cây thư mục 3 tầng, áp dụng quy chuẩn chữ thường viết liền không dấu, ngăn cách bằng gạch nối cho các file báo cáo học thuật.",
    tools: ["Organization", "Security", "File System"],
    image: task1BannerImg,
    tags: ["Organization", "Security"]
  },
  {
    id: 2,
    title: "BT2 - Chương 2: Tìm kiếm và đánh giá thông tin",
    category: "Nghiên cứu học thuật",
    summary: "Sử dụng thành thạo các toán tử tìm kiếm nâng cao kết hợp với mô hình CRAAP để đánh giá tính xác thực, độ tin cậy và sự phù hợp của nguồn thông tin học thuật.",
    description: "Thống trị không gian học thuật trực tuyến thông qua kỹ năng Google Dorking, định vị các tạp chí khoa học uy tín, và thực thi kiểm chứng nguồn thông tin nghiêm ngặt.",
    icon: Database,
    challenge: "Bùng nổ tin giả, bẫy thông tin kém chất lượng và nguồn tài nguyên trôi nổi thiếu kiểm chứng bảo chứng.",
    solution: "Sử dụng các toán tử logic như filetype, site:, AND, OR kết hợp kiểm chứng 5 trụ cột của mô hình CRAAP để bộ lọc luôn giữ lại tri thức chất lượng cao.",
    tools: ["Critical Thinking", "CRAAP", "Google Scholar"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7iNIiDnv6wG8564ynuEB-N17FHFhNn8x-BYw90Gv_Gn9x8og8ShElhK0qixSMKe13gXcdNKQVzdm0IKScQZ96_3IzMYlCHLeDJVbDddAN78v2Y_BYdoaJ9UfVRz1ft50nrzbjV_PGQwA5tT8JLBG-Q3B4wfqBn1x4CvUE28i59gIboP0SGN6My6hvr90c4yPHVyci7PaQX3EnShMXGJh1c8lvxp-XYE_apfAIl8JfHXXUzVxn0ZbEQJmysuDfGaLBgxmoiNgmFg",
    tags: ["Critical Thinking", "CRAAP"]
  },
  {
    id: 3,
    title: "BT2 - Chương 3: Viết Prompt hiệu quả cho AI",
    category: "Kỹ nghệ Prompt",
    summary: "Thử nghiệm các phiên bản Prompt (Cơ bản, Cải tiến, Tối ưu). Phân tích sự khác biệt về kết quả đầu ra dựa trên cấu trúc câu lệnh và ngữ cảnh để tối ưu hóa hiệu suất làm việc với LLMs.",
    description: "Khám phá các thiết kế prompt nâng cao (Few-shot prompting, Roleplaying, Chain-of-Thought) để lập trình thông minh hành vi ngôn ngữ của trí tuệ nhân tạo.",
    icon: BrainCircuit,
    challenge: "Câu trả lời của AI thường chung chung, mơ hồ hoặc sai lệch nếu thiếu thông tin bối cảnh và định hướng phong cách.",
    solution: "Phát triển cấu trúc prompt dạng mô-đun: Xác định Vai trò, Nhiệm vụ cụ thể, Định dạng đầu ra mong muốn, và cung cấp Ví dụ minh họa rõ ràng.",
    tools: ["AI Interaction", "LLM", "Prompting"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_m4ku4XF94SVaTQByAPq6CWBDYjRbGUOMX5qTPRiFmn4Rq0nmiMto20s4hdf5-6EsJAg102N6b90skQbNltaGwMGV6MDrurOTx3Wq_XqeyEQrvX8MS59TJTZbSfdZ3PgpC06QuUz3Ko7G667IgRdrbQ2WLprCr4qblBMbN00zukvN9fN0-HTiC-g-jYyIG5qjKeKrZRJM8LWnP84gaZWxcnQ-RmBCm8Aod4_m0eUUncqk8E4z_iefsZUMydmZbD43CMRrIaGuSA",
    tags: ["AI Interaction", "LLM"]
  },
  {
    id: 4,
    title: "BT2 - Chương 5: Ứng dụng AI tạo sinh",
    category: "Sáng tạo nội dung",
    summary: "Quy trình tạo hình ảnh chuyên nghiệp với công cụ Generative AI. Kết hợp khả năng thẩm mỹ cá nhân và sức mạnh xử lý của trí tuệ nhân tạo để tạo ra các tác phẩm số ấn tượng.",
    description: "Sản sinh tác phẩm mỹ thuật từ văn bản bằng trí tuệ nhân tạo, tối ưu các yếu tố kỹ thuật nhiếp ảnh, ánh sáng, góc độ, và phong cách hội họa.",
    icon: Palette,
    challenge: "Yếu tố khách quan trong thuật toán sinh ảnh đôi lúc tạo ra các chi tiết kỳ dị, sai tỷ lệ hoặc thiếu nhất quán trực quan.",
    solution: "Sử dụng Prompt phân cấp từ chủ thể, chất liệu, tiêu cự máy ảnh, ánh sáng đến phong cách vẽ, kết hợp tinh chỉnh các tham số hạt nhân.",
    tools: ["Midjourney", "Design", "Generative Art"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzQ7Hfqum3tyzn_KU4kDCdQzEXsTUPexgBOgCmZOoz8S5KrMjIpmpw-IYSX51VSceZdeK8JknCPN344NZP1IFV3TwJnyRG9D6VdhwjYiGMk111FjUI3ZqPbXXl1AG7oJXFX5_aP1cQO9bplnhQ70c_rffWr0ZC-0sEtwfRWrUIFMO1QFMyKTsVzQkeN3fm3Fhw5QemqhTo5yKho19Phy6RaVtAq5VL4EWOWVMA5VPKw46VVwu2PEi4stC71yh_yTsCtWJ42Nr8yw",
    tags: ["Midjourney", "Design"]
  },
  {
    id: 5,
    title: "BT3 - Chương 4: Giao tiếp và hợp tác trong môi trường số",
    category: "Cộng tác số",
    summary: "Thiết lập quy trình làm việc nhóm trên các nền tảng cộng tác trực tuyến. Quản lý phân quyền, đồng bộ hóa dữ liệu và tối ưu hóa hiệu quả trao đổi thông tin trong nhóm.",
    description: "Ứng dụng các không gian số cộng tác thời gian thực như Google Workspace, Canva, Notion để đồng bộ mục đích và tối đa hóa năng suất hành động tập thể.",
    icon: Users,
    challenge: "Bất đồng ý kiến, trễ hạn tiến độ, thiếu nhất quán phiên bản tài liệu và phân chia khối lượng công việc bất hợp lý.",
    solution: "Xây dựng bảng ma trận phân công nhiệm vụ (RACI) rõ ràng trên bảng Kanban, thiết lập cơ chế bình luận và cập nhật trực tuyến tức thì.",
    tools: ["Notion", "Teamwork", "Google Docs"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA2dL7i0ErCEKNyGAd-rfTaPfjM628Dp7DGIzbqF2fRUNdiVLGWGAV-IkiSOBq8qkx9dIcK6u0SP6dMb1Vf7M0KpYhe21yK7QJC3CvNDADWrbfQfOWaeHdmaoaYq8z6OkFylUcS5Gr3ApkpxHMkL2ZzddMQu9NUWFKD1yjBLmwZHe4sAF2AkbRs0fcrc1tBuOXNvdUoYtPQj8oQaWbtNwYBzap6_u8dv5zKpAufRYxXYkhvFQwl3uWgFmcvknf5iP8RIZfQjkC_A",
    tags: ["Notion", "Teamwork"]
  },
  {
    id: 6,
    title: "BT4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số",
    category: "Đạo đức số",
    summary: "Phân tích chuyên sâu các nguyên tắc đạo đức AI: Tính công bằng, bảo mật, minh bạch và trách nhiệm giải trình. Đề xuất các giải pháp ứng dụng AI nhân văn.",
    description: "Bàn luận và nghiên cứu các khía cạnh liêm chính học thuật, đạo đức số của việc sử dụng công cụ Generative AI, đảm bảo sự phát triển hài hòa hữu ích giữa con người và thuật toán.",
    icon: Gavel,
    challenge: "Lạm dụng AI quá đã dẫn đến xói mòn khả năng tự nghiên cứu, đạo văn và rò rỉ dữ liệu cá nhân nhạy cảm.",
    solution: "Thiết lập bộ quy chế cá nhân nghiêm khắc về việc chỉ dùng AI như một trợ lý gợi ý ý tưởng và phản biện độc lập, tuyệt đối không chép nguyên văn.",
    tools: ["Ethics", "Security", "Integrity"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs3F3Pd0jlMNH7OZ_z6gW0_4f0Fsz9q-eKzm5fXBlRU4cqA1gPKUaxPl-9c1-ZUjx4ZF7bgrrJNOHIE1bqA-H4Ge9PqYMgcsljha5Hbu3pwdF-NQhptSn89_DlO5jbjkrh4ur2QIb0LwB5Vs31PRbNqPCvTcZbzHyVKXxOxsCE_1UzfYzmz9G7Q80TZEGXRn5u1wUzMlxqaqMLsmUvGEYAfGH8o2-yOnQ-ZhPQiOFBivVKJJM5zguyGk2LK8z_OFbs0rk7Yxsldg",
    tags: ["Ethics", "Security"]
  }
];

// --- Components ---

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return <motion.div className="progress-bar" style={{ scaleX }} />;
};

const Navbar = ({ forceDarkOnTop = false }: { forceDarkOnTop?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      const dialogViewport = document.getElementById("dialog-scroll-viewport");
      if (dialogViewport) {
        setIsScrolled(dialogViewport.scrollTop > 20);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("scroll", handleScroll, true); // capture-phase for scrolling inside dialog portalled viewport

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Dự án", href: "/portfolio" },
    { label: "Tổng kết", href: "/reflection" }
  ];

  const projectSubLinks = [
    { label: "BT1 - Chương 1", taskId: 1 },
    { label: "BT2 - Chương 2", taskId: 2 },
    { label: "BT2 - Chương 3", taskId: 3 },
    { label: "BT3 - Chương 4", taskId: 5 },
    { label: "BT2 - Chương 5", taskId: 4 },
    { label: "BT4 - Chương 6", taskId: 6 }
  ];

  const isProjectActive = location.pathname === "/portfolio" || location.pathname.startsWith("/portfolio");
  const isDarkStyle = isHeroPage || (forceDarkOnTop && !isScrolled);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled 
        ? isHeroPage 
          ? "py-3 bg-[#020617]/90 border-b border-white/10 backdrop-blur-md shadow-lg" 
          : "py-3 bg-[#fcf9f4]/95 border-b border-[#bfc8ce]/20 shadow-sm backdrop-blur-md"
        : isDarkStyle
          ? "py-6 bg-transparent text-white"
          : "py-6 bg-transparent text-[#1c1c19]"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-14">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className={`p-2 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] ${isDarkStyle ? "bg-white/10 text-teal-400" : "bg-[#036686]/10 text-[#036686]"}`}>
            <Terminal className="w-5 h-5" />
          </div>
          <span className={`text-xl font-heading tracking-tight font-bold transition-colors ${isDarkStyle ? "text-white" : "text-[#036686]"}`}>
            Portfolio Kỹ Thuật Số
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold tracking-wide relative md:-translate-x-12">
          {navLinks.map((link) => {
            if (link.label === "Dự án") {
              return (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link 
                    to={link.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`relative py-1 transition-all duration-300 hover:scale-105 select-none flex items-center gap-1.5 ${
                      isDarkStyle 
                        ? isProjectActive 
                          ? "text-teal-300 font-bold" 
                          : "text-white/70 hover:text-white"
                        : isProjectActive
                          ? "text-[#036686] font-bold" 
                          : "text-[#40484d] hover:text-[#036686]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isDropdownOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                    )}
                    {isProjectActive && (
                      <motion.div 
                        layoutId="navbar-active-indicator" 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkStyle ? "bg-teal-400" : "bg-[#036686]"}`} 
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Card */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl shadow-xl border overflow-hidden z-50 text-left ${
                          isDarkStyle 
                            ? "bg-[#0b1329] border-white/10 text-white shadow-[#020617]/80" 
                            : "bg-[#fdfbf6] border-[#bfc8ce]/30 text-[#1c1c19] shadow-slate-200"
                        }`}
                      >
                        <div className="py-2.5 flex flex-col">
                          {projectSubLinks.map((sub, i) => (
                            <Link
                              key={i}
                              to={`/portfolio?task=${sub.taskId}`}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`px-5 py-3 text-sm font-heading font-medium transition-all duration-200 border-l-2 border-transparent ${
                                isDarkStyle
                                  ? "hover:bg-white/10 hover:border-teal-400 hover:text-teal-300"
                                  : "hover:bg-[#036686]/15 hover:border-[#036686] hover:text-[#036686]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = location.pathname === link.href || (location.pathname + location.hash) === link.href;
            return (
              <Link 
                key={link.label} 
                to={link.href} 
                className={`relative py-1 transition-all duration-300 hover:scale-105 select-none ${
                  isDarkStyle 
                    ? isActive 
                      ? "text-teal-300 font-bold" 
                      : "text-white/70 hover:text-white"
                    : isActive
                      ? "text-[#036686] font-bold" 
                      : "text-[#40484d] hover:text-[#036686]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active-indicator" 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkStyle ? "bg-teal-400" : "bg-[#036686]"}`} 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button className={`md:hidden p-2 rounded-full hover:bg-black/5 ${isDarkStyle ? "text-white hover:bg-white/10" : "text-[#1c1c19]"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              isDarkStyle
                ? "bg-[#020617]/95 border-white/10 text-white"
                : "bg-[#fcf9f4]/95 border-[#bfc8ce]/20 text-[#1c1c19]"
            } overflow-hidden`}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                if (link.label === "Dự án") {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                        className={`text-lg font-heading flex items-center justify-between w-full text-left cursor-pointer ${
                          isDarkStyle 
                            ? "text-white hover:text-teal-300" 
                            : "text-[#1c1c19] hover:text-[#036686]"
                        }`}
                      >
                        <span>Dự án</span>
                        {isMobileSubMenuOpen ? (
                          <ChevronUp className="w-5 h-5 opacity-70" />
                        ) : (
                          <ChevronDown className="w-5 h-5 opacity-70" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isMobileSubMenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 mt-2 flex flex-col gap-3 border-l border-white/10 md:border-[#036686]/10"
                          >
                            {projectSubLinks.map((sub, i) => (
                              <Link
                                key={i}
                                to={`/portfolio?task=${sub.taskId}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileSubMenuOpen(false);
                                }}
                                className={`text-sm font-heading font-medium transition-colors ${
                                  isDarkStyle 
                                    ? "text-white/60 hover:text-teal-300" 
                                    : "text-[#40484d] hover:text-[#036686]"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={link.label} 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`text-lg font-heading ${
                      isDarkStyle 
                        ? "text-white hover:text-teal-300" 
                        : "text-[#1c1c19] hover:text-[#036686]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Floating Blurred Blobs - Dynamic Atmosphere */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-pastel-blue-deep/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] animate-float" />
        
        {/* Tech Grid */}
        <div className="absolute inset-0 quantum-grid opacity-30" />
        
        {/* Subtle Neural Lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#A7C7E7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M-100,200 Q400,100 800,400 T1800,200" fill="none" stroke="url(#line-grad)" strokeWidth="0.5" className="animate-pulse" />
          <path d="M-100,500 Q600,800 1200,500 T2100,700" fill="none" stroke="url(#line-grad)" strokeWidth="0.5" className="animate-pulse-slow" />
        </svg>
      </div>

      {/* Side Narrative - Editorial Detail */}
      <div className="absolute left-8 bottom-24 flex flex-col items-start gap-4 z-20 hidden xl:flex">
        <div className="w-8 h-px bg-white/20" />
        <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-inter max-w-[120px] leading-relaxed">
          TRẠM DỪNG SỐ CỦA TƯƠNG LAI • TECH EXPLORATION
        </p>
      </div>

      {/* Decorative Side Rail */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-20 hidden lg:flex">
        <div className="w-px h-32 bg-white/10" />
        <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.8em] text-white/30 font-inter font-bold">EST. 2026 • UNIVERSITY OF TECHNOLOGY</span>
        <div className="w-px h-32 bg-white/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.2 }}
             className="flex flex-col items-center text-center lg:text-left lg:items-start lg:-translate-x-10"
          >
            <div className="relative group">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="text-[13vw] lg:text-[10vw] leading-[0.82] tracking-tighter text-white font-instrument relative z-0 select-none opacity-80"
              >
                Digital <br />
                <span className="text-pastel-blue-light font-instrument italic font-extralight opacity-60">Odyssey</span>
              </motion.h1>
              
              {/* Spinning Ring behind text */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="absolute -top-16 -right-16 lg:-right-32 w-64 h-64 border border-white/5 rounded-full z-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-56 h-56 border border-white/10 border-dashed rounded-full animate-spin-slow opacity-10" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 lg:mt-6 max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl text-white font-instrument italic tracking-tight leading-tight">
                 <span className="text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]">Công Nghệ Số</span>
              </h2>
              
              <p className="mt-8 text-lg lg:text-2xl text-white/50 font-inter font-light leading-relaxed max-w-2xl">
                 <span className="text-white font-medium">Bùi Công Thái</span> • CNTT • VNU • 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-14 flex flex-col sm:flex-row gap-6 items-center"
            >
              <Link to="/about">
                  <Button size="lg" className="rounded-full h-16 min-w-[240px] px-12 glass bg-white/5 text-white border-white/10 shadow-2xl hover:bg-teal-500/20 hover:border-teal-500/30 hover:scale-105 transition-all duration-500 text-xs uppercase tracking-[0.3em] font-bold group">
                      Bắt đầu Hành Trình <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
              </Link>
              
              <div className="flex items-center gap-5 px-8 py-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                <div className="flex -space-x-3">
                  {['AI', 'PY', 'UI'].map((label, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#020617] bg-pastel-blue-deep/20 flex items-center justify-center text-[9px] font-bold text-white shadow-lg backdrop-blur-md">
                      {label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-teal-400 font-bold mb-0.5">Core Spheres</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Python • AI • Design</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Poster Column - Blended Digital Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.0, x: 120 }}
            animate={{ opacity: 1, scale: 1.6, x: 0 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full lg:w-auto relative flex items-center justify-center min-h-[700px] lg:min-h-screen overflow-visible z-10"
          >
            {/* The Image itself with high-end digital blending */}
            <div className="relative w-full lg:w-[200%] xl:w-[240%] group select-none flex justify-center items-center lg:translate-x-5 lg:translate-y-6">
              {/* Massive Atmosphere glow - Deep layered integration */}
              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-[250px] opacity-30 animate-pulse-slow" />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-teal-500/10 to-transparent blur-[120px] opacity-20" />
              
              <div className="relative z-10 w-full scale-[0.9] -translate-x-6 origin-center">
                <img 
                  src="https://drive.google.com/thumbnail?id=1ksFimKflpM3oqeBmVGVI1ipkX5bn4RXU&sz=w1280" 
                  alt="Digital Presence" 
                  className="w-full h-auto object-contain pointer-events-none filter contrast-[1.2] brightness-[1.05] saturate-[1.1] mix-blend-screen drop-shadow-[0_0_100px_rgba(45,212,191,0.2)]"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 80%)',
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* HUD Accents - Massive scale expanded */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none scale-[1.8] lg:scale-[3.0]">
                <div className="w-[85%] h-[85%] border border-teal-500/5 rounded-full animate-spin-slow" />
                <div className="absolute w-[100%] h-[100%] border border-white/5 border-dashed rounded-full animate-pulse-slow" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Cinematic Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 font-bold animate-pulse">Explore</span>
        <motion.div className="w-1 h-3 bg-teal-400 rounded-full animate-scroll-dot" />
      </motion.div>
    </section>
  );
};

const ProfileSection = () => {
    const listItems = [
        { label: "Họ và tên", value: "Bùi Công Thái" },
        { label: "Ngành học", value: "CNTT (Trường ĐH Công Nghệ - Đại học Quốc gia Hà Nội)" },
        { label: "Lớp", value: "K70 - IT4" },
        { label: "Mã sinh viên", value: "25020385" },
        { label: "Mã lớp Nhập môn CNS và Trí tuệ nhân tạo", value: "VNU1001_E252015" },
        { label: "Sở thích", value: "Chơi game - Đá bóng - Khám phá Công nghệ" },
    ];

    return (
        <section id="about" className="py-24 container mx-auto px-6 scroll-mt-24">
            <div className="glass p-12 md:p-20 rounded-[4rem] shadow-xl relative overflow-hidden bg-white/45 border-white/60">
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#036686]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-6 bg-[#036686]/10 rounded-full blur-3xl glow-blue animate-pulse-slow" />
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="w-72 h-72 rounded-full overflow-hidden border-[12px] border-white/60 shadow-[0_30px_60px_rgba(3,102,134,0.15)] relative z-10 flex items-center justify-center bg-white/20"
                        >
                            <img 
                                src={profileImg} 
                                alt="Bùi Công Thái Profile" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 text-left"
                    >
                        <h2 className="text-4.5xl lg:text-5xl mb-12 text-[#036686] font-heading font-bold">Giới thiệu bản thân</h2>
                        <ul className="space-y-6">
                            {listItems.map((item, idx) => (
                                <motion.li 
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className="flex flex-col md:flex-row md:items-center gap-3 group cursor-default border-b border-[#bfc8ce]/10 pb-4"
                                >
                                    <span className="text-[#036686] font-sans text-xs uppercase tracking-[0.2em] font-bold min-w-[220px]">
                                        {item.label}:
                                    </span>
                                    <span className="text-[#1c1c19] font-sans text-lg font-medium leading-tight group-hover:text-[#036686] transition-colors">
                                        {item.value}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="w-full h-px bg-[#bfc8ce]/25 my-12" />

                {/* Kỹ năng đang phát triển */}
                <div className="w-full text-left">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#036686] mb-8 text-center w-full">
                        Kỹ năng đang phát triển
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            {
                                icon: BrainCircuit,
                                title: "AI & Công nghệ",
                                description: "Tìm hiểu cách sử dụng các công cụ AI tạo sinh như ChatGPT, Gemini và Canva AI để hỗ trợ học tập, tạo ý tưởng và cải thiện sản phẩm số."
                            },
                            {
                                icon: Cpu,
                                title: "Kỹ năng số",
                                description: "Rèn luyện khả năng tổ chức dữ liệu cá nhân, quản lý tệp tin, tìm kiếm học thuật nâng cao và đánh giá độ tin cậy của nguồn thông tin."
                            },
                            {
                                icon: Palette,
                                title: "Sáng tạo nội dung",
                                description: "Ứng dụng AI để hỗ trợ viết bài, tạo hình ảnh minh họa, thiết kế infographic và trình bày sản phẩm học tập theo hướng trực quan, hiện đại."
                            },
                            {
                                icon: Users,
                                title: "Cộng tác trực tuyến",
                                description: "Sử dụng các công cụ như Google Drive, Google Docs, Trello và Discord/Zalo để phối hợp công việc, quản lý tiến độ và trao đổi nhóm hiệu quả."
                            }
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 items-start p-4 md:p-6 rounded-2xl hover:bg-white/35 transition-all duration-300 group cursor-default"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#036686]/10 flex items-center justify-center shrink-0 border border-[#036686]/10 shadow-sm group-hover:scale-105 group-hover:bg-[#036686]/15 transition-all duration-300">
                                    <skill.icon className="w-7 h-7 text-[#036686]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-heading font-bold text-lg text-[#1c1c19] mb-1 group-hover:text-[#036686] transition-colors">
                                        {skill.title}:
                                    </h4>
                                    <p className="font-sans text-sm md:text-base text-[#40484d] leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-[#bfc8ce]/25 my-12" />

                {/* Mục tiêu của Portfolio */}
                <div className="w-full text-left">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#036686] mb-4 flex items-center gap-3">
                        <Target className="w-7 h-7 text-[#036686]" /> Mục tiêu của Portfolio
                    </h3>
                    <p className="font-sans text-[#40484d] text-base md:text-lg leading-relaxed max-w-4xl">
                        Hệ thống hóa toàn bộ các bài tập thực hành và kiến thức đã tiếp thu trong môn học <strong className="font-bold text-[#036686]">Nhập môn Công nghệ số và Ứng dụng AI</strong>. Đây là nơi lưu giữ minh chứng cho quá trình rèn luyện các kỹ năng từ quản lý tệp tin đến việc làm chủ các công cụ AI hiện đại.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TaskCard = ({ task, onClick, index, isLeft }: { task: Task; onClick: () => void; index: number; isLeft?: boolean }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="cursor-pointer h-full"
      onClick={onClick}
    >
      <Card className="glass h-full border-white/60 group hover:bg-white/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden text-left bg-white/45 rounded-3xl py-0 gap-0">
        {task.image ? (
          <div className="relative h-56 w-full overflow-hidden shrink-0">
            <img 
              alt={task.title} 
              className="w-full h-full object-cover object-top opacity-100 group-hover:scale-[1.03] transition-transform duration-500" 
              src={task.image} 
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gradient-to-br from-[#036686]/10 to-[#5ba4c7]/20 flex flex-col items-center justify-center relative overflow-hidden shrink-0">
            <task.icon className="w-16 h-16 text-[#036686]/60 group-hover:scale-110 transition-transform duration-500" />
          </div>
        )}
        
        <CardHeader className="p-8 flex-grow flex flex-col">
          <span className="text-[#036686] font-sans text-xs uppercase tracking-widest font-bold block mb-1">
            {task.category}
          </span>
          <CardTitle className="text-2xl mb-4 text-[#1c1c19] font-heading leading-tight font-bold group-hover:text-[#036686] transition-colors">
            {task.title}
          </CardTitle>
          <CardDescription className="font-sans text-[0.95rem] text-[#40484d] leading-relaxed text-justify line-clamp-4 flex-grow font-light">
            {task.summary}
          </CardDescription>
          
          <div className={`flex flex-wrap gap-1.5 mt-6 ${isLeft ? "justify-start md:justify-end" : "justify-start"}`}>
            {task.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#036686]/10 text-[#036686] rounded-full font-sans text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <div className="p-8 pt-0 mt-auto">
          <Button variant="ghost" size="sm" className="w-full rounded-xl glass bg-white/30 text-[#036686] border-[#036686]/20 font-bold uppercase tracking-widest text-[0.7rem] hover:bg-[#036686] hover:text-white hover:border-[#036686] transition-all duration-300">
            XEM CHI TIẾT <ChevronRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const PersonalCommitment = () => {
  return (
    <section id="commitment" className="py-24 container mx-auto px-6 scroll-mt-24 text-left">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#036686]/5 p-12 md:p-20 rounded-[4rem] border-2 border-[#036686]/20 shadow-inner flex flex-col md:flex-row items-center gap-12"
      >
        <div className="md:w-1/4 flex justify-center">
          <div className="text-[#036686]/30 hover:text-[#036686] transition-all duration-700 hover:scale-110 shrink-0">
            <ShieldAlert className="w-32 h-32" />
          </div>
        </div>
        <div className="md:w-3/4 text-[#1c1c19]">
          <h2 className="text-4xl lg:text-5xl text-[#036686] mb-6 font-heading font-bold">Cam kết cá nhân</h2>
          <p className="font-sans text-xl text-[#1c1c19] italic leading-relaxed font-light">
            "Tôi cam kết mọi sản phẩm trong Portfolio này đều phản ánh tư duy và nỗ lực cá nhân của mình. Những phần có sự hỗ trợ từ AI đều được ghi nhận và trích dẫn minh bạch. Tôi chịu trách nhiệm hoàn toàn về tính chính xác và liêm chính của tất cả nội dung được trình bày."
          </p>
          <div className="mt-8 flex flex-col gap-1 border-t border-[#036686]/10 pt-6">
            <span className="text-2xl font-heading font-bold text-[#1c1c19]">Bùi Công Thái</span>
            <span className="font-sans text-sm text-[#40484d] font-medium">MSV: 25020385</span>
            <span className="font-sans text-xs text-[#70787e] uppercase tracking-widest font-bold">Lớp học phần: VNU1001_E252015</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ReflectionSection = () => {
  return (
    <section id="reflection" className="py-24 container mx-auto px-6 scroll-mt-24 text-left">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[4rem] text-[#1c1c19] relative overflow-hidden bg-white/45 border-white/60 shadow-xl"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#036686]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0a86b0]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-4xl lg:text-5xl text-[#036686] mb-8 font-heading font-bold">Chiêm nghiệm & Phát triển</h2>
            <div className="space-y-6 font-sans text-[1.05rem] text-[#40484d] leading-relaxed font-light">
              <p className="text-justify">
                Hành trình xây dựng Portfolio này không chỉ là việc tập hợp các sản phẩm số, mà là một quá trình tự soi rọi về năng lực và tư duy của bản thân trong thế giới công nghệ biến đổi không ngừng.
              </p>
              <p className="text-justify">
                Tôi đã học được rằng: Công cụ AI chỉ thực sự mạnh mẽ khi nằm trong tay một người có tư duy phản biện sắc bén và đạo đức nghề nghiệp vững vàng. Thách thức lớn nhất tôi đã vượt qua chính là việc dung hòa giữa sự tiện lợi của tự động hóa và giá trị nguyên bản của tư duy con người.
              </p>
              
              <div className="bg-[#036686]/5 p-8 rounded-3xl border-l-[6px] border-l-[#036686] mt-8 hover:bg-[#036686]/10 transition-all duration-300">
                <h5 className="text-xl text-[#036686] font-sans font-bold mb-4">3 Bài học tâm đắc nhất:</h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-[#036686]/10 flex items-center justify-center shrink-0 mt-1 text-[#036686]">
                      <CheckCircle className="w-4 h-4 text-[#036686]" />
                    </div>
                    <span className="font-sans text-[0.95rem]"><strong className="text-[#1c1c19]">Kỷ luật dữ liệu:</strong> Nền tảng của mọi hệ thống lớn bắt đầu từ sự ngăn nắp nhỏ nhất.</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-[#036686]/10 flex items-center justify-center shrink-0 mt-1 text-[#036686]">
                      <CheckCircle className="w-4 h-4 text-[#036686]" />
                    </div>
                    <span className="font-sans text-[0.95rem]"><strong className="text-[#1c1c19]">Tư duy cộng tác AI:</strong> AI không thay thế con người, nhưng người biết dùng AI sẽ dẫn đầu.</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-[#036686]/10 flex items-center justify-center shrink-0 mt-1 text-[#036686]">
                      <CheckCircle className="w-4 h-4 text-[#036686]" />
                    </div>
                    <span className="font-sans text-[0.95rem]"><strong className="text-[#1c1c19]">Đạo đức số:</strong> Kim chỉ nam cho mọi giải pháp công nghệ bền vững và nhân văn.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col gap-6 select-none">
            <div className="bg-white/80 p-8 rounded-3xl text-center shadow-inner border border-[#bfc8ce]/30 transition-transform hover:-translate-y-2 duration-300">
              <span className="text-6xl text-[#036686] font-heading font-bold block mb-2 leading-none">06</span>
              <span className="font-sans text-xs text-[#40484d] uppercase tracking-wider font-bold">Bài tập chuyên sâu</span>
            </div>
            <div className="bg-white/80 p-8 rounded-3xl text-center shadow-inner border border-[#bfc8ce]/30 transition-transform hover:-translate-y-2 duration-300">
              <span className="text-6xl text-[#036686] font-heading font-bold block mb-2 leading-none">100%</span>
              <span className="font-sans text-xs text-[#40484d] uppercase tracking-wider font-bold">Liêm chính học thuật</span>
            </div>
            <div className="bg-[#036686] p-8 rounded-3xl text-center shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-sm text-white block uppercase tracking-wider font-bold">Năng lực số chuẩn</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <section className="pt-32 pb-12 gradient-mesh min-h-screen">
      <div className="relative z-10">
        <ProfileSection />
        <PersonalCommitment />
      </div>
    </section>
  );
};

const ReflectionPage = () => {
  return (
    <section className="pt-32 pb-12 gradient-mesh min-h-screen">
      <div className="relative z-10">
        <ReflectionSection />
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const taskIdParam = searchParams.get("task");

  useEffect(() => {
    if (taskIdParam) {
      const task = tasks.find(t => t.id === parseInt(taskIdParam));
      if (task) {
        setSelectedTask(task);
      }
    } else {
      setSelectedTask(null);
    }
  }, [taskIdParam]);

  const handleSelectTask = (task: Task | null) => {
    if (task) {
      setSearchParams({ task: task.id.toString() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <section className="pt-32 pb-12 gradient-mesh min-h-screen">
      <div className="relative z-10">

      {/* Tasks Section */}
      <section id="tasks" className="py-24 container mx-auto px-6 scroll-mt-24">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl lg:text-6xl text-[#036686] tracking-tight font-heading mb-4 font-bold">
            Hành Trình Dự Án & Bài Tập
          </h2>
          <p className="text-[#40484d] font-sans text-lg font-light">
            Tổng hợp 6 bài tập thực hành trọng tâm thể hiện năng lực số và tư duy AI của học phần "Nhập môn Công nghệ số và Trí tuệ nhân tạo".
          </p>
        </motion.div>

        {/* Timeline representation */}
        <div className="relative mt-12 space-y-12 md:space-y-0">
          {/* Vertical line down the middle */}
          <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#bfc8ce]/50 to-transparent -translate-x-1/2 pointer-events-none" />

          {tasks.map((task, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={task.id} className="flex flex-col md:flex-row items-stretch md:items-center gap-6 relative md:my-10">
                {/* Left panel - ONLY shown on left columns on desktop */}
                <div className={`md:w-1/2 order-2 md:order-1 ${isLeft ? "md:text-right" : "hidden md:block"}`}>
                  {isLeft && (
                    <TaskCard task={task} onClick={() => handleSelectTask(task)} index={idx} isLeft={true} />
                  )}
                </div>

                {/* Vertical Timeline Pointer */}
                <div className="absolute left-9 md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#036686] border border-[#036686]/20 flex items-center justify-center text-white select-none shadow-[0_0_20px_rgba(3,102,134,0.15)] hover:scale-110 transition-transform">
                    <task.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Right panel - shown on right columns on desktop and all columns on mobile if not left */}
                <div className={`md:w-1/2 order-3 pl-20 md:pl-10 ${!isLeft ? "" : "hidden md:block"}`}>
                  {!isLeft ? (
                    <TaskCard task={task} onClick={() => handleSelectTask(task)} index={idx} isLeft={false} />
                  ) : (
                    <div className="block md:hidden">
                      <TaskCard task={task} onClick={() => handleSelectTask(task)} index={idx} isLeft={false} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Task Detail Dialog */}
      <Dialog open={!!selectedTask} onOpenChange={(open) => { if (!open) handleSelectTask(null); }}>
        <DialogContent 
          showCloseButton={false} 
          id="dialog-scroll-viewport"
          className="top-0 left-0 translate-x-0 translate-y-0 w-full h-full max-w-full sm:max-w-full md:max-w-full lg:max-w-full h-screen max-h-screen flex flex-col bg-[#fdfbf7] p-0 rounded-none shadow-none text-left text-[#1c1c19] outline-none overflow-y-auto custom-scrollbar border-0 transition-all duration-[850ms] ease-[0.16,1,0.3,1] data-closed:translate-y-20 data-closed:opacity-0 data-closed:scale-100 data-open:translate-y-0 data-open:opacity-100 data-open:scale-100"
        >
          <AnimatePresence mode="wait">
            {selectedTask && (
              <motion.div 
                key={selectedTask.id}
                initial={{ opacity: 0, y: 45, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -45, scale: 0.985 }}
                transition={{ duration: 0.85, ease: [0.25, 1, 0.4, 1] }}
                className="flex flex-col w-full min-h-screen relative pt-20 md:pt-24"
              >
              {/* Sticky premium close button - shifted below the Navbar height and stacked above it */}
              <button
                onClick={() => handleSelectTask(null)}
                className="fixed top-24 right-6 md:top-24 md:right-10 z-[101] flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
                title="Đóng chi tiết và quay lại"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-350" />
              </button>

              {/* Header / Banner area mimicking Google Sites custom header */}
              <div className="relative overflow-hidden flex items-end shrink-0 select-none bg-[#036686] py-14 md:py-18 px-8 md:px-12 border-b border-[#bfc8ce]/35 min-h-[260px] md:min-h-[280px]">
                {/* Background image for banner with dark overlay for higher contrast and richer colors */}
                <img 
                  src={selectedTask.image || `https://picsum.photos/seed/task-${selectedTask.id}/1200/600`} 
                  alt="Banner Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-95 filter contrast-110 saturate-110 brightness-[0.94] scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none" />
                
                {/* Main banner text */}
                <div className="z-10 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                  >
                    <h3 className="text-3xl md:text-5xl text-white tracking-tight leading-tight font-heading font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {selectedTask.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-4 text-white/90 text-xs drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                      <span className="font-sans text-white/70">Học phần:</span>
                      <strong className="text-teal-300 font-semibold font-heading">Nhập môn Công nghệ số và Trí tuệ nhân tạo (VNU1001)</strong>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Main content - Two Columns split */}
              <div className="bg-[#fdfbf7] p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left Column (Main study details) */}
                  <div className="lg:col-span-8 space-y-12">
                    
                    {/* Block A: Dynamic Academic Content based on Task ID */}
                    {selectedTask.id === 1 && (
                      <div className="space-y-10">
                        {/* Section 1: Objectives */}
                        <div>
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading mb-6">
                            MỤC TIÊU CỦA BÀI TẬP
                          </h2>
                          <div className="bg-[#036686]/5 border-l-4 border-l-[#036686] p-6 rounded-r-3xl space-y-3 font-sans text-[#40484d] text-[1rem] leading-relaxed">
                            <p className="font-medium text-[#1c1c19]">Thiết lập tư duy quản trị tài nguyên tri thức số cá nhân:</p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>Hiểu rõ nguyên lý vận hành của hệ quản lý tệp tin (File Manager) trên môi trường cục bộ và đám mây.</li>
                              <li>Rèn luyện thói quen ngăn nắp và khoa học thông qua cấu trúc phân tầng tối ưu bậc 3 (3-tiered hierarchy).</li>
                              <li>Làm chủ và nhất quán quy tắc đặt tên (Naming Conventions) không dầu, viết liền, ngăn cách bằng dấu liên kết khoa học.</li>
                              <li>Loại bỏ hoàn toàn sự hỗn loạn tệp tin để tối đa hóa tốc độ tìm kiếm và làm việc.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Section 2: Implementation Process */}
                        <section className="space-y-10 text-left">
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading">Quy trình thực hiện</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <FolderOpen className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Tạo thư mục mới</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Khởi tạo cấu trúc: Mở File Explorer, truy cập vào ổ đĩa dữ liệu (D: hoặc E:) để tạo thư mục gốc với cú pháp ThucHanh_BuiCongThai.</p>
                              <img 
                                alt="File and folder organization" 
                                className="w-full h-[307px] object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={step1Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 2 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <Database className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Quản lý tệp tin</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Tạo mới một tệp văn bản (.txt), thực hiện đổi tên tệp và tạo thêm các thư mục con (thư mục TaiLieu) để tổ chức dữ liệu khoa học. </p>
                              <img 
                                alt="Structured digital boards" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={step2Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 3 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <ClipboardList className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Thao tác điều hướng dữ liệu</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Thực hiện sao chép (Copy & Paste) và di chuyển (Cut & Paste) các tệp tin giữa thư mục gốc và thư mục con bằng phím tắt hoặc chuột phải. </p>
                              <img 
                                alt="Folder tree structure screenshot" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={step3Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 4 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <Check className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Xử lý xóa và khôi phục</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Thực hành xóa tệp tin vào Thùng rác (Delete), xóa vĩnh viễn (Shift + Delete) và cách khôi phục lại dữ liệu từ Recycle Bin. </p>
                              <img 
                                alt="Cloud storage synchronization" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={step4Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        </section>

                        {/* Minh chứng Document Card */}
                        <div className="bg-white rounded-2xl p-6 border-2 border-[#5ba4c7] shadow-sm flex flex-col md:flex-row items-center gap-6 mt-8">
                          <div className="w-16 h-16 bg-[#ffdad6] text-[#ba1a1a] rounded-xl flex items-center justify-center shrink-0">
                            <FileText className="w-8 h-8" />
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h4 className="font-bold text-[#1c1c19] font-heading">Sản Phẩm Cuối Cùng (Bài 1)</h4>
                            <p className="text-xs text-[#40484d] mt-1 font-sans">Bài 1_Thao tác tệp và thư mục_Bùi Công Thái_25020385.pdf</p>
                          </div>
                          <a 
                            className="px-6 py-2.5 bg-[#036686] text-white rounded-full font-bold text-sm hover:bg-[#036686]/90 transition-colors flex items-center gap-2 cursor-pointer" 
                            href="https://drive.google.com/file/d/1Y2Mf82X-cDaYyRFwkdYOjqFhqhWBeJpY/view?usp=sharing" 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Xem tài liệu <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex justify-center mt-3">
                          <a 
                            href="https://drive.google.com/file/d/1Y2Mf82X-cDaYyRFwkdYOjqFhqhWBeJpY/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#036686] text-sm font-medium hover:underline transition-colors font-heading block break-all text-center"
                          >
                            https://drive.google.com/file/d/1Y2Mf82X-cDaYyRFwkdYOjqFhqhWBeJpY/view?usp=sharing
                          </a>
                        </div>

                        {/* Reflection Section */}
                        <section className="space-y-6 pt-6 text-left">
                          <h2 className="text-2xl font-bold text-[#1c1c19] flex items-center gap-2 font-heading">
                            <Lightbulb className="w-6 h-6 text-[#036686]" />
                            Reflection
                          </h2>
                          <div className="bg-[#f1f3f4]/70 rounded-2xl p-8 border border-[#e0e0e0] italic relative shadow-sm">
                            <span className="absolute -top-4 -left-2 text-6xl text-[#036686]/10 font-serif leading-none select-none">“</span>
                            <div className="relative z-10 space-y-4 text-[#1c1c19] leading-relaxed font-semibold font-sans">
                              <p>
                                Việc dọn dẹp và quy hoạch dữ liệu số theo cấu trúc logic giúp mình làm chủ không gian làm việc số và tiết kiệm rất nhiều quỹ thời gian quý báu. Quy tắc đặt tên tệp tuy nhỏ nhưng mang lại vẻ chuyên nghiệp và tính tự động hóa cao trong học tập lâu dài.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}

                    {selectedTask.id === 2 && (
                      <div className="space-y-10">
                        {/* Task 2 custom */}
                        <div>
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading mb-6">
                            MỤC TIÊU CỦA BÀI TẬP
                          </h2>
                          <div className="bg-[#036686]/5 border-l-4 border-l-[#036686] p-6 rounded-r-3xl space-y-3 font-sans text-[#40484d] text-[1rem] leading-relaxed">
                            <p className="font-medium text-[#1c1c19]">Rèn luyện tư duy phản biện trong việc tiếp thu và thẩm định tri thức học thuật:</p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>Sử dụng nhuần nhuyễn các cú pháp Google Dorking nâng cao để bóc tách tri thức từ hàng nghìn bài báo khoa học.</li>
                              <li>Áp dụng nghiêm túc 5 chỉ số vàng của thang đánh giá CRAAP nhằm phân lọc dữ liệu chính thống.</li>
                              <li>Nâng cao khả năng tổng hợp tài liệu chuyên khoa học chất lượng cao.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Quy trình thực hiện Section */}
                        <section className="space-y-10 text-left">
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading">Quy trình thực hiện</h2>
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Step 1 */}
                              <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                  <BookOpen className="w-5 h-5 text-[#036686]" />
                                </div>
                                <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Chọn chủ đề</h3>
                                <p className="text-[#40484d] text-sm leading-relaxed font-sans">Xác định một chủ đề nghiên cứu liên quan đến chuyên ngành học của bản thân.</p>
                                <img 
                                  alt="Digital search and brainstorming" 
                                  className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              {/* Step 2 */}
                              <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                  <Database className="w-5 h-5 text-[#036686]" />
                                </div>
                                <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Tìm kiếm nâng cao</h3>
                                <p className="text-[#40484d] text-sm leading-relaxed font-sans">Áp dụng nâng cao các cú pháp tìm kiếm site:edu.vn, filetype:pdf bóc tách trực tiếp các tạp chí khoa học uy tín, tránh các diễn đàn rác.</p>
                                <img 
                                  alt="Code and logic query" 
                                  className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                  src={task2Step2Img}
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* Step 3 */}
                              <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                  <ClipboardList className="w-5 h-5 text-[#036686]" />
                                </div>
                                <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Đánh giá nguồn tin</h3>
                                <p className="text-[#40484d] text-sm leading-relaxed font-sans">Phân tích độ tin cậy dựa trên các tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và cập nhật tính năng.</p>
                                <img 
                                  alt="CRAAP Evaluation Table" 
                                  className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                  src={task2Step3Img}
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              {/* Step 4 */}
                              <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                  <Check className="w-5 h-5 text-[#036686]" />
                                </div>
                                <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Tổng hợp dữ liệu</h3>
                                <p className="text-[#40484d] text-sm leading-relaxed font-sans">Lập bảng so sánh, xếp hạng độ tin cậy của các nguồn đã tìm thấy</p>
                                <img 
                                  alt="Studying and notes writing" 
                                  className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                  src={task2Step4Img}
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              {/* Step 5 */}
                              <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                  <Share2 className="w-5 h-5 text-[#036686]" />
                                </div>
                                <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Hoàn thiện báo cáo</h3>
                                <p className="text-[#40484d] text-sm leading-relaxed font-sans">Viết báo cáo (3-4 trang) đính kèm danh mục tài liệu tham khảo theo định dạng Harvard.</p>
                                <img 
                                  alt="Citation and academic sharing" 
                                  className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                  src={task2Step5Img}
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>
                          </div>
 
                          {/* Minh chứng Document Card */}
                          <div className="bg-white rounded-2xl p-6 border-2 border-[#5ba4c7] shadow-sm flex flex-col md:flex-row items-center gap-6 mt-8">
                            <div className="w-16 h-16 bg-[#ffdad6] text-[#ba1a1a] rounded-xl flex items-center justify-center shrink-0">
                              <FileText className="w-8 h-8" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h4 className="font-bold text-[#1c1c19] font-heading">Sản Phẩm Cuối Cùng (Bài 2)</h4>
                              <p className="text-xs text-[#40484d] mt-1 font-sans">Bài 2_Bài tập 2_Bùi Công Thái_25020385.pdf</p>
                            </div>
                            <a 
                              className="px-6 py-2.5 bg-[#036686] text-white rounded-full font-bold text-sm hover:bg-[#036686]/90 transition-colors flex items-center gap-2 cursor-pointer" 
                              href="https://drive.google.com/file/d/1HaN_ixa4zpPluZx8V0-YG7nlOrGCoXhh/view?usp=sharing" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Xem tài liệu <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <div className="flex justify-center mt-3">
                            <a 
                              href="https://drive.google.com/file/d/1HaN_ixa4zpPluZx8V0-YG7nlOrGCoXhh/view?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#036686] text-sm font-medium hover:underline transition-colors font-heading block break-all text-center"
                            >
                              https://drive.google.com/file/d/1HaN_ixa4zpPluZx8V0-YG7nlOrGCoXhh/view?usp=sharing
                            </a>
                          </div>
                        </section>
 
                        {/* Reflection Section */}
                        <section className="space-y-6 pt-6 text-left">
                          <h2 className="text-2xl font-bold text-[#1c1c19] flex items-center gap-2 font-heading">
                            <Lightbulb className="w-6 h-6 text-[#036686]" />
                            Reflection
                          </h2>
                          <div className="bg-[#f1f3f4]/70 rounded-2xl p-8 border border-[#e0e0e0] italic relative shadow-sm">
                            <span className="absolute -top-4 -left-2 text-6xl text-[#036686]/10 font-serif leading-none select-none">“</span>
                            <div className="relative z-10 space-y-4 text-[#1c1c19] leading-relaxed font-semibold font-sans">
                              <p>
                                Trước đây mình chỉ gõ từ khóa đơn thuần vào Google và chọn kết quả đầu tiên mà không kiểm tra nguồn gốc. Sau bài tập, mình nhận ra rằng kết quả đầu tiên chưa chắc đã là tốt nhất hay chính xác nhất.
                              </p>
                              <p>
                                Toán tử site:edu.vn và filetype:pdf giúp mình lọc ra nguồn học thuật uy tín nhanh hơn nhiều. Và tiêu chí CRAAP giờ trở thành thói quen mình áp dụng mỗi khi đọc thông tin mới — đặc biệt hữu ích khi làm các bài báo cáo môn học.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}

                    {selectedTask.id === 3 && (
                      <div className="space-y-10">
                        {/* Task 3 custom */}
                        <div>
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading mb-6">
                            MỤC TIÊU CỦA BÀI TẬP
                          </h2>
                          <div className="bg-[#036686]/5 border-l-4 border-l-[#036686] p-6 rounded-r-3xl space-y-3 font-sans text-[#40484d] text-[1rem] leading-relaxed">
                            <p className="font-medium text-[#1c1c19]">Phát triển tư duy giao tiếp và lập trình câu lệnh thông minh với trí tuệ nhân tạo (LLMs):</p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>Thiết kế hệ thống câu lệnh phân cấp từ đơn giản đến phức tạp: Phổ thông, Trung cấp và Chuyên gia.</li>
                              <li>Ứng dụng kỹ nghệ prompt tân tiến: Few-Shot, CoT (Chain Of Thought), Roleplaying.</li>
                              <li>Khám phá phương pháp điều phối và dẫn dắt AI trả lời chuẩn mực, cá nhân hóa kết quả đầu ra.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Quy trình thực hiện Section */}
                        <section className="space-y-10 text-left">
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading">Quy trình thực hiện</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <Users className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Chọn tác vụ học tập</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Khai báo rõ ràng Roleplay (chuyên gia phân tích, giáo sư, lập trình viên trưởng) để định hình cá tính và phạm vi chuyên sâu câu trả lời của AI.</p>
                              <img 
                                alt="Abstract mind/intelligence design" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task3Step1Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 2 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <Wrench className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Thiết kế 3 phiên bản Prompt</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">
                                Với mỗi tác vụ, soạn thảo 3 mức độ câu lệnh khác nhau:
                                <br /><br />
                                <strong>Prompt cơ bản:</strong> Đơn giản và ngắn gọn.
                                <br /><br />
                                <strong>Prompt cải tiến:</strong> Chi tiết hơn và có cấu trúc rõ ràng.
                                <br /><br />
                                <strong>Prompt nâng cao:</strong> Áp dụng các kỹ thuật chuyên sâu như Role Prompting, Chain-of-Thought, và Few-shot examples.
                              </p>
                              <img 
                                alt="Working together context presentation" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task3Step2Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 3 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <BrainCircuit className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Thử nghiệm và So sánh</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Sử dụng các công cụ AI (như ChatGPT hoặc Gemini) để chạy các câu lệnh đã viết và so sánh kết quả đầu ra của chúng</p>
                              <img 
                                alt="Chain of thought screenshot" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task3Step3Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 4 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <LayoutGrid className="w-5 h-5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Phân tích hiệu quả</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Đánh giá và giải thích lý do tại sao các phiên bản prompt cải tiến hoặc nâng cao lại mang lại kết quả chất lượng hơn.</p>
                              <img 
                                alt="Clean structured output layout display" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task3Step4Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
 
                          {/* Minh chứng Document Card */}
                          <div className="bg-white rounded-2xl p-6 border-2 border-[#5ba4c7] shadow-sm flex flex-col md:flex-row items-center gap-6 mt-8">
                            <div className="w-16 h-16 bg-[#ffdad6] text-[#ba1a1a] rounded-xl flex items-center justify-center shrink-0">
                              <FileText className="w-8 h-8" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h4 className="font-bold text-[#1c1c19] font-heading">Sản Phầm Cuối Cùng (Bài 3)</h4>
                              <p className="text-xs text-[#40484d] mt-1 font-sans">Bài 3_Bài tập 2_Bùi Công Thái_25020385.pdf</p>
                            </div>
                            <a 
                              className="px-6 py-2.5 bg-[#036686] text-white rounded-full font-bold text-sm hover:bg-[#036686]/90 transition-colors flex items-center gap-2 cursor-pointer" 
                              href="https://drive.google.com/file/d/1Q_vlEjLe9oCBOMVPKbQGBXoU6fefQKkz/view?usp=sharing" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Xem tài liệu <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <div className="flex justify-center mt-3">
                            <a 
                              href="https://drive.google.com/file/d/1Q_vlEjLe9oCBOMVPKbQGBXoU6fefQKkz/view?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#036686] text-sm font-medium hover:underline transition-colors font-heading block break-all text-center"
                            >
                              https://drive.google.com/file/d/1Q_vlEjLe9oCBOMVPKbQGBXoU6fefQKkz/view?usp=sharing
                            </a>
                          </div>
                        </section>
 
                        {/* Reflection Section */}
                        <section className="space-y-6 pt-6 text-left">
                          <h2 className="text-2xl font-bold text-[#1c1c19] flex items-center gap-2 font-heading">
                            <Lightbulb className="w-6 h-6 text-[#036686]" />
                            Reflection
                          </h2>
                          <div className="bg-[#f1f3f4]/70 rounded-2xl p-8 border border-[#e0e0e0] italic relative shadow-sm">
                            <span className="absolute -top-4 -left-2 text-6xl text-[#036686]/10 font-serif leading-none select-none">“</span>
                            <div className="relative z-10 space-y-4 text-[#1c1c19] leading-relaxed font-semibold font-sans">
                              <p>
                                Bài học lớn nhất: AI không biết 'đọc vị' nếu mình không nói rõ. Cứ thêm vai trò, ngữ cảnh với giới hạn vào prompt là kết quả xịn hơn hẳn.
                              </p>
                              <p>
                                Cái khó là tìm được độ dài vừa đủ. Ngắn quá thì AI hiểu sai, dài quá thì dễ bị sót ý. Đúng là kỹ năng này phải thực hành, va vấp nhiều mới quen tay được.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}

                    {selectedTask.id === 4 && (
                      <div className="space-y-6">
                        {/* Task 4 custom */}
                        <div>
                          <h2 className="text-xl font-bold text-center text-[#036686] font-heading mb-4">
                            MỤC TIÊU CỦA BÀI TẬP
                          </h2>
                          <div className="bg-[#036686]/5 border-l-4 border-l-[#036686] p-4 md:p-5 rounded-r-2xl space-y-2 font-sans text-[#40484d] text-sm leading-relaxed">
                            <p className="font-medium text-[#1c1c19]">Nghiên cứu ứng dụng trí tuệ nhân tạo trong thiết kế sáng tạo truyền thông kỹ thuật số:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Học cách kiểm soát các yếu tố mỹ thuật, góc máy, ánh sáng thông qua mô tả ngôn ngữ chi tiết.</li>
                              <li>Tối ưu hóa các tham số nâng cao của các mô hình sinh ảnh (như tỷ lệ khung hình, độ chi tiết, seeds ảnh).</li>
                              <li>Dung hòa sức mạnh tạo lập của AI với thẩm mỹ, tính nhân văn và liêm chính tác phẩm của con người.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Quy trình thực hiện Section */}
                        <section className="space-y-6 text-left">
                          <h2 className="text-xl font-bold text-center text-[#036686] font-heading">Quy trình thực hiện</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Step 1 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <Palette className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Lựa chọn dự án sáng tạo</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">Xác định loại nội dung bạn muốn thực hiện, chẳng hạn như một bài thuyết trình, infographic, bài viết chuyên sâu hoặc một video ngắn (dưới 5 phút) giải thích về một khái niệm trong môn học.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <Wrench className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Lựa chọn bộ công cụ AI</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">Sử dụng ít nhất 3 công cụ AI khác nhau thuộc các nhóm: tạo văn bản (như ChatGPT, Gemini), tạo hình ảnh (như Midjourney, DALL-E) và hỗ trợ thiết kế/dựng video (như Canva AI, CapCut).</p>
                            </div>
                            {/* Step 3 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <Cpu className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Triển khai với Prompt Engineering</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">Thiết kế các câu lệnh (prompts) cụ thể cho từng công cụ, ghi lại quá trình tương tác và kết quả nhận được từ AI.</p>
                            </div>
                            {/* Step 4 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <Check className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Chỉnh sửa và Tích hợp</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">Thực hiện việc tinh chỉnh, sửa lỗi và kết hợp các kết quả đầu ra từ AI với sự sáng tạo cá nhân để tạo ra sản phẩm hoàn thiện, mang đậm dấu ấn riêng.</p>
                            </div>
                          </div>
 
                          {/* Minh chứng Document Card */}
                          <div className="bg-white rounded-xl p-4 border-2 border-[#5ba4c7] shadow-sm flex flex-col md:flex-row items-center gap-4 mt-6">
                            <div className="w-12 h-12 bg-[#ffdad6] text-[#ba1a1a] rounded-lg flex items-center justify-center shrink-0">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h4 className="font-bold text-[#1c1c19] font-heading text-sm">Sản Phầm Cuối Cùng (Bài 5)</h4>
                              <p className="text-[11px] text-[#40484d] mt-0.5 font-sans">Bài 5_Bài tập 2_Bùi Công Thái_25020385.pdf</p>
                            </div>
                            <a 
                              className="px-4 py-2 bg-[#036686] text-white rounded-full font-bold text-xs hover:bg-[#036686]/90 transition-colors flex items-center gap-1.5 cursor-pointer text-center" 
                              href="https://drive.google.com/file/d/1BXDKhY6asgvgUHxrvNvBSXo_CB6hF786/view?usp=sharing" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Xem tài liệu <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                          <div className="flex justify-center mt-2">
                            <a 
                              href="https://drive.google.com/file/d/1BXDKhY6asgvgUHxrvNvBSXo_CB6hF786/view?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#036686] text-xs font-medium hover:underline transition-colors font-heading block break-all text-center"
                            >
                              https://drive.google.com/file/d/1BXDKhY6asgvgUHxrvNvBSXo_CB6hF786/view?usp=sharing
                            </a>
                          </div>
                        </section>
 
                        {/* Reflection Section */}
                        <section className="space-y-4 pt-4 text-left">
                          <h2 className="text-xl font-bold text-[#1c1c19] flex items-center gap-2 font-heading">
                            <Lightbulb className="w-5 h-5 text-[#036686]" />
                            Reflection
                          </h2>
                          <div className="bg-[#f1f3f4]/70 rounded-xl p-5 md:p-6 border border-[#e0e0e0] italic relative shadow-sm text-sm">
                            <span className="absolute -top-3 -left-1 text-5xl text-[#036686]/10 font-serif leading-none select-none">“</span>
                            <div className="relative z-10 space-y-4 text-[#1c1c19] leading-relaxed font-semibold font-sans">
                              <p>
                                Bài này làm mình hứng thú nhất vì được thoải mái test thử. Cùng một chiếc prompt mà ChatGPT với Gemini cho ra hai kết quả khác một trời một vực về phong cách.
                              </p>
                              <p>
                                Bài học rút ra là AI chỉ giỏi làm nháp nhanh thôi, còn muốn chuẩn chỉnh thì mình vẫn phải tự tay biên tập lại. AI cung cấp 'nguyên liệu', còn mình mới là người 'nấu' ra sản phẩm cuối cùng.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}

                    {selectedTask.id === 5 && (
                      <div className="space-y-12">
                        {/* Task 5 custom */}
                        {/* Mục Tiêu Bài Tập Section */}
                        <section className="bg-[#f0f4f6] rounded-[2rem] p-8 md:p-10 space-y-8 border border-[#e0e0e0] shadow-sm text-left">
                          <div className="flex items-center gap-3 justify-center">
                            <h2 className="text-2xl font-bold text-center text-[#036686] font-heading">
                              MỤC TIÊU CỦA BÀI TẬP
                            </h2>
                          </div>
                          <div className="space-y-6">
                            <div className="flex gap-4">
                              <div className="mt-1 w-6 h-6 rounded-full border-2 border-[#036686] flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 text-[#036686] stroke-[3]" />
                              </div>
                              <div>
                                <h3 className="font-bold text-[#1c1c19] font-heading">Phát triển kỹ năng cộng tác</h3>
                                <p className="text-[#40484d] text-sm mt-1 font-sans">Làm chủ quy trình làm việc nhóm trực tuyến, từ thảo luận đến ra quyết định và thực hiện.</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="mt-1 w-6 h-6 rounded-full border-2 border-[#036686] flex items-center justify-center shrink-0">
                                <Wrench className="w-3.5 h-3.5 text-[#036686] stroke-[2.5]" />
                              </div>
                              <div>
                                <h3 className="font-bold text-[#1c1c19] font-heading">Ứng dụng bộ công cụ số</h3>
                                <p className="text-[#40484d] text-sm mt-1 font-sans">Thành thạo ít nhất 3 loại công cụ: Quản lý dự án (Trello), Soạn thảo (Docs), và Lưu trữ (Drive).</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="mt-1 w-6 h-6 rounded-full border-2 border-[#036686] flex items-center justify-center shrink-0">
                                <ClipboardList className="w-3.5 h-3.5 text-[#036686] stroke-[2.5]" />
                              </div>
                              <div>
                                <h3 className="font-bold text-[#1c1c19] font-heading">Quản lý hiệu quả</h3>
                                <p className="text-[#40484d] text-sm mt-1 font-sans">Học cách phân công nhiệm vụ, đặt deadline và theo dõi tiến độ công việc một cách khoa học.</p>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* Quy trình thực hiện Section */}
                        <section className="space-y-10 text-left">
                          <h2 className="text-2xl font-bold text-center text-[#036686] font-heading">Quy trình thực hiện</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <Users className="w-5 h-5" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Hình thành nhóm</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Thảo luận và lựa chọn một dự án nhỏ để cùng thực hiện.</p>
                              <img 
                                alt="Team brainstorming" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task4Step1Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 2 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <Wrench className="w-5 h-5" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Chọn công cụ</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Lựa chọn bộ 3 công cụ: Trello/Notion, Google Docs, và Google Drive.</p>
                              <img 
                                alt="Digital tools for collaboration" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task4Step2Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 3 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <LayoutGrid className="w-5 h-5" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Thiết lập không gian</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Tạo bảng công việc chung và mời thành viên tham gia cộng tác.</p>
                              <img 
                                alt="Workspace setup" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src="https://lh3.googleusercontent.com/aida/AP1WRLvAT7YH7bhjcJQSIMzEwKW3dAvYZlNm0rzaOSYku3OrPgeQA6XSwppHxLZDQ411jPQkxvBOvHhVU6UvkyPr_jdsbvcugrKoCCJYZiG2pWVLX0grQsQ_j7VXyJ8X0UL3F4nGm6fk7WFqTJX6RGOCZNjkhDaxHEIMu_AiNVjIW-naWxz9FjbsiUkNFSg8MEuRkse0GLe-gj3Fxz8PYW6646VqSdrJcHtw6I1N2HSmjx6QDKrMGM_hrRUR"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Step 4 */}
                            <div className="bg-white rounded-xl p-6 relative shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-4">
                                <ClipboardList className="w-5 h-5" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-lg mb-2 font-heading">Thực hiện &amp; Quản lý</h3>
                              <p className="text-[#40484d] text-sm leading-relaxed font-sans">Phân công nhiệm vụ, đặt deadline và tiến hành soạn thảo chung.</p>
                              <img 
                                alt="Team collaborating on shared document" 
                                className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm font-sans" 
                                src={task4Step4Img}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>

                          {/* Minh chứng Document Card */}
                          <div className="bg-white rounded-2xl p-6 border-2 border-[#5ba4c7] shadow-sm flex flex-col md:flex-row items-center gap-6 mt-8">
                            <div className="w-16 h-16 bg-[#ffdad6] text-[#ba1a1a] rounded-xl flex items-center justify-center shrink-0">
                              <FileText className="w-8 h-8" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h4 className="font-bold text-[#1c1c19] font-heading">Sản Phầm Cuối Cùng (Bài 4)</h4>
                              <p className="text-xs text-[#40484d] mt-1 font-sans">Bài 4_Bài tập 3_Bùi Công Thái_25020385.pdf</p>
                            </div>
                            <a 
                              className="px-6 py-2.5 bg-[#036686] text-white rounded-full font-bold text-sm hover:bg-[#036686]/90 transition-colors flex items-center gap-2 cursor-pointer" 
                              href="https://drive.google.com/file/d/1RKKb4plfXIveQPwLLd7RtDZZw-owSCQ3/view?usp=sharing" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Xem tài liệu <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <div className="flex justify-center mt-3">
                            <a 
                              href="https://drive.google.com/file/d/1RKKb4plfXIveQPwLLd7RtDZZw-owSCQ3/view?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#036686] text-sm font-medium hover:underline transition-colors font-heading block break-all text-center"
                            >
                              https://drive.google.com/file/d/1RKKb4plfXIveQPwLLd7RtDZZw-owSCQ3/view?usp=sharing
                            </a>
                          </div>
                        </section>

                        {/* Reflection Section */}
                        <section className="space-y-6 pt-6 text-left">
                          <h2 className="text-2xl font-bold text-[#1c1c19] flex items-center gap-2 font-heading">
                            <Lightbulb className="w-6 h-6 text-[#036686]" />
                            Reflection
                          </h2>
                          <div className="bg-[#f1f3f4]/70 rounded-2xl p-8 border border-[#e0e0e0] italic relative shadow-sm">
                            <span className="absolute -top-4 -left-2 text-6xl text-[#036686]/10 font-serif leading-none select-none">“</span>
                            <div className="relative z-10 space-y-4 text-[#1c1c19] leading-relaxed font-semibold font-sans">
                              <p>
                                Đây là lần đầu mình thực sự dùng Trello cho một dự án nhóm thay vì chỉ xem demo. Khó nhất vẫn là giai đoạn đầu để chốt cách làm việc: ai làm gì, deadline bao giờ và báo cáo ra sao.
                              </p>
                              <p>
                                Mình cũng nhận ra dùng Google Docs tiện hơn hẳn việc gửi qua lại file Word, đỡ hẳn vụ 'bản cũ - bản mới' vì lúc nào cũng thấy bản cập nhật nhất. Mấy kỹ năng cộng tác online này chắc chắn sẽ cực kỳ hữu ích cho các bài tập nhóm sau này.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}

                    {selectedTask.id === 6 && (
                      <div className="space-y-6">
                        {/* Task 6 custom */}
                        <div>
                          <h2 className="text-xl font-bold text-center text-[#036686] font-heading mb-4">
                            MỤC TIÊU CỦA BÀI TẬP
                          </h2>
                          <div className="bg-[#036686]/5 border-l-4 border-l-[#036686] p-4 md:p-5 rounded-r-2xl space-y-2 font-sans text-[#40484d] text-sm leading-relaxed">
                            <p className="font-medium text-[#1c1c19]">Định hình đạo đức công nghệ và cam kết liêm chính học thuật trong thời đại số:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Hiểu sâu các ranh giới mong manh giữa nghiên cứu minh bạch và lạm quyền tự động sao chép ý tưởng AI.</li>
                              <li>Cam kết tuân thủ quy chế giáo dục của VNU và hướng dẫn phát triển AI bền vững.</li>
                              <li>Thực hành trích dẫn khoa học minh bạch cho mọi nguồn thông tin và văn bản do AI hỗ trợ.</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-3 text-[#036686] font-sans text-xs uppercase tracking-[0.3em] font-bold mb-3">
                            <div className="w-1.5 h-4 bg-[#036686] rounded-full" /> BẢN HIẾP ƯỚC LIÊM CHÍNH SỐ (INTEGRITY PLEDGE)
                          </h4>
                          <div className="bg-[#036686]/5 border border-[#036686]/20 p-5 md:p-6 rounded-2xl text-[#40484d] font-sans leading-relaxed text-sm shadow-sm">
                            <div className="flex items-center gap-2 text-teal-600 font-bold mb-3">
                              <ShieldCheck className="w-4.5 h-4.5" />
                              <span className="text-xs md:text-sm">CAM KẾT 3 KHÔNG KHI KHÁM PHÁ CÔNG NGHỆ:</span>
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 font-sans text-[#40484d] text-xs">
                              <li><strong className="text-[#1c1c19]">Không Đạo Văn:</strong> Tuyệt đối không sao chép nguyên trạng 100% văn phong văn bản được sinh ra bởi AI và nộp như bài làm do bản thân tự viết.</li>
                              <li><strong className="text-[#1c1c19]">Không Lạm Dụng:</strong> Chỉ sử dụng AI như một người phản biện đa chiều, gợi mở ý tưởng sơ khai hoặc soát lỗi cú pháp mã nguồn.</li>
                              <li><strong className="text-[#1c1c19]">Không Rò Rỉ:</strong> Tuyệt đối bảo mật bí mật quốc gia, thông tin nhà trường, mã sinh viên nhạy cảm lên các máy chủ công cộng chưa kiểm chứng.</li>
                            </ol>
                          </div>
                        </div>

                        {/* Quy trình thực hiện Section */}
                        <section className="space-y-6 text-left">
                          <h2 className="text-xl font-bold text-center text-[#036686] font-heading">Quy trình thực hiện</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Step 1 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <BookOpen className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Nghiên cứu chính sách</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">Tìm hiểu các quy định của trường đại học đang theo học (hoặc các trường đại học lớn tại Việt Nam) về việc sử dụng AI trong môi trường học thuật.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <ShieldAlert className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Thực hiện nhiệm vụ học tập với AI</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">
                                Lựa chọn một tác vụ cụ thể như viết bài luận, chuẩn bị bài thuyết trình hoặc tổng hợp tài liệu.
                                <br /><br />
                                Ghi chép lại toàn bộ các câu lệnh (prompt) đã sử dụng và kết quả đầu ra tương ứng từ AI.
                                <br /><br />
                                Mô tả quá trình đánh giá, chỉnh sửa và tích hợp các nội dung do AI tạo ra vào sản phẩm cuối cùng.
                                <br /><br />
                                Thực hiện trích dẫn việc sử dụng AI một cách minh bạch và rõ ràng.
                              </p>
                            </div>
                            {/* Step 3 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <Gavel className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Phân tích các vấn đề đạo đức</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">
                                Xác định ranh giới giữa việc AI hỗ trợ hợp lý và hành vi gian lận học thuật.
                                <br /><br />
                                Xem xét các vấn đề về quyền sở hữu trí tuệ và quy tắc trích dẫn nguồn.
                                <br /><br />
                                Đánh giá tác động của AI đối với quá trình tự học và phát triển kỹ năng cá nhân.
                              </p>
                            </div>
                            {/* Step 4 */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-[#e0e0e0] hover:shadow-md transition-shadow">
                              <div className="w-9 h-9 rounded-full bg-[#bfc8ce]/25 text-[#1c1c19] flex items-center justify-center mb-3">
                                <ShieldCheck className="w-4.5 h-4.5 text-[#036686]" />
                              </div>
                              <h3 className="font-bold text-[#1c1c19] text-base mb-1 font-heading">Thiết lập nguyên tắc sử dụng AI trách nhiệm</h3>
                              <p className="text-[#40484d] text-xs leading-relaxed font-sans font-medium">Thiết lập từ 5 đến 7 nguyên tắc cụ thể về cách sử dụng AI có trách nhiệm trong học tập để đảm bảo liêm chính và hiệu quả.</p>
                            </div>
                          </div>

                          {/* Minh chứng Document Card */}
                          <div className="bg-white rounded-xl p-4 border-2 border-[#5ba4c7] shadow-sm flex flex-col md:flex-row items-center gap-4 mt-6">
                            <div className="w-12 h-12 bg-[#ffdad6] text-[#ba1a1a] rounded-lg flex items-center justify-center shrink-0">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h4 className="font-bold text-[#1c1c19] font-heading text-sm">Sản Phầm Cuối Cùng (Bài 6)</h4>
                              <p className="text-[11px] text-[#40484d] mt-0.5 font-sans">Bài 6_An toàn thông tin và Đạo đức AI_Bùi Công Thái_25020385.pdf</p>
                            </div>
                            <a 
                              className="px-4 py-2 bg-[#036686] text-white rounded-full font-bold text-xs hover:bg-[#036686]/90 transition-colors flex items-center gap-1.5 cursor-pointer text-center" 
                              href="https://drive.google.com/file/d/1SLoxJ377JwE8AAS9yqQk4O_gsM-HAf_n/view?usp=sharing" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Xem tài liệu <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                          <div className="flex justify-center mt-2">
                            <a 
                              href="https://drive.google.com/file/d/1SLoxJ377JwE8AAS9yqQk4O_gsM-HAf_n/view?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#036686] text-xs font-medium hover:underline transition-colors font-heading block break-all text-center"
                            >
                              https://drive.google.com/file/d/1SLoxJ377JwE8AAS9yqQk4O_gsM-HAf_n/view?usp=sharing
                            </a>
                          </div>
                        </section>

                        {/* Reflection Section */}
                        <section className="space-y-4 pt-4 text-left">
                          <h2 className="text-xl font-bold text-[#1c1c19] flex items-center gap-2 font-heading">
                            <Lightbulb className="w-5 h-5 text-[#036686]" />
                            Reflection
                          </h2>
                          <div className="bg-[#f1f3f4]/70 rounded-xl p-5 md:p-6 border border-[#e0e0e0] italic relative shadow-sm text-sm">
                            <span className="absolute -top-3 -left-1 text-5xl text-[#036686]/10 font-serif leading-none select-none">“</span>
                            <div className="relative z-10 space-y-4 text-[#1c1c19] leading-relaxed font-semibold font-sans">
                              <p>
                                An toàn thông tin và đạo đức mạng không còn là lý thuyết suông khi đứng trước cơn sóng bùng nổ của AI. Chữ tín và liêm chính trong học tập là chiếc la bàn bảo chứng giá trị lâu bền của con người.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}



                  </div>

                  {/* Right Column (Side-panel like Google Sites Table of Contents & Utilities) */}
                  <div className="lg:col-span-4 space-y-8">
                    
                    {/* Panel 1: Document Metadata */}
                    <div className="bg-white/80 p-6 rounded-3xl border border-slate-200/70 shadow-sm text-left">
                      <h5 className="text-[#036686] font-sans text-xs uppercase tracking-widest font-bold mb-4 pb-2 border-b">THÔNG TIN HOẠT ĐỘNG</h5>
                      <ul className="space-y-4 text-xs font-sans">
                        <li className="flex justify-between items-center text-[#70787e]">
                          <span>Tiến độ hành trình:</span>
                          <span className="text-[#1c1c19] font-bold bg-teal-500/10 text-teal-700 px-2 py-0.5 rounded-full">Đã hoàn thành</span>
                        </li>
                        <li className="flex justify-between items-center text-[#70787e]">
                          <span>Môn học:</span>
                          <span className="text-[#1c1c19] font-medium text-right max-w-[150px] truncate">Nhập môn CNS & AI</span>
                        </li>
                        <li className="flex justify-between items-center text-[#70787e]">
                          <span>Phương thức nộp bài:</span>
                          <span className="text-[#1c1c19] font-medium">Báo cáo & Minh chứng sản phẩm</span>
                        </li>

                      </ul>
                    </div>

                    {/* Panel 2: Learning Tools Used */}
                    <div className="bg-white/80 p-6 rounded-3xl border border-slate-200/70 shadow-sm text-left">
                      <h5 className="text-[#036686] font-sans text-xs uppercase tracking-widest font-bold mb-4 pb-2 border-b">CÔNG CỤ PHÂN LẬP SỰ KIỆN</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedTask.tools.map(tool => (
                          <Badge key={tool} variant="secondary" className="glass bg-[#036686]/5 border-[#036686]/10 text-[#036686] text-[10px] px-3 py-1.5 uppercase font-bold tracking-widest">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>



                  </div>

                </div>
              </div>

              {/* Bottom close bar in Dialog */}
              <div className="p-6 md:p-8 mt-auto border-t border-[#bfc8ce]/20 bg-[#fdfbf7] flex justify-between items-center">
                <span className="text-[10px] text-[#70787e] font-sans uppercase tracking-widest font-bold hidden md:inline ml-4">
                  Bản quyền báo cáo thuộc về Bùi Công Thái © 2026
                </span>
                <Button 
                  onClick={() => handleSelectTask(null)} 
                  className="rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/10 border-0 h-11 px-8 uppercase tracking-widest font-bold text-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all ml-auto"
                >
                  Đóng Chi Tiết
                </Button>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
      </div>
    </section>
  );
};

const Footer = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Bùi Công Thái Digital Portfolio',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Đã sao chép liên kết chia sẻ!");
    }
  };

  return (
    <footer className="bg-white border-t border-[#bfc8ce]/30 w-full py-16 mt-20 text-left">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-5 h-5 text-[#036686]" />
            <span className="font-heading text-xl text-[#036686] tracking-tight font-bold">Bùi Công Thái</span>
          </div>
          <p className="font-sans text-sm text-[#40484d] max-w-xs leading-relaxed font-light">
            MSV: 25020385 | Học phần Nhập môn Công nghệ số và Trí tuệ nhân tạo.
          </p>
          <p className="font-sans text-xs text-[#70787e] mt-4 uppercase tracking-widest font-bold">
            Digital Portfolio © 2026
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-6">
          <div className="flex flex-wrap gap-6 items-center">
            <a 
              className="font-sans text-sm text-[#40484d] hover:text-[#036686] transition-all flex items-center gap-2 font-medium" 
              href="mailto:25020385@vnu.edu.vn"
            >
              <Mail className="w-4 h-4" /> 25020385@vnu.edu.vn
            </a>
            <a 
              className="font-sans text-sm text-[#40484d] hover:text-[#036686] transition-all flex items-center gap-2 font-medium" 
              href="https://github.com/25020385-BuiCongThai"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a 
              className="font-sans text-sm text-[#40484d] hover:text-[#036686] transition-all font-medium" 
              href="https://uet.vnu.edu.vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              VNU-UET
            </a>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-transparent hover:bg-[#036686]/10 flex items-center justify-center text-[#036686] cursor-pointer border border-[#036686]/10 hover:border-[#036686]/30 transition-all shadow-sm"
              title="Chia sẻ"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={handlePrint}
              className="w-10 h-10 rounded-full bg-transparent hover:bg-[#036686]/10 flex items-center justify-center text-[#036686] cursor-pointer border border-[#036686]/10 hover:border-[#036686]/30 transition-all shadow-sm"
              title="In ấn"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const hasSelectedTask = !!searchParams.get("task");

  // Handle hash scrolling for anchors on navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Wait for transition
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <ProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={
              <PageTransition>
                <Hero />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            } />
            <Route path="/portfolio" element={
              <PageTransition>
                <PortfolioPage />
              </PageTransition>
            } />
            <Route path="/reflection" element={
              <PageTransition>
                <ReflectionPage />
              </PageTransition>
            } />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="selection:bg-[#036686]/20">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}
