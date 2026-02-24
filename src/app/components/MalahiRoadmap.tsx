import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

type CircleType = 'center' | 'q1' | 'q2' | 'q3' | 'q4' | null;

export function MalahiRoadmap() {
  const [selectedCircle, setSelectedCircle] = useState<CircleType>(null);
  const [currentQuarter] = useState<'q1' | 'q2' | 'q3' | 'q4'>('q1'); // Current quarter - can be changed
  
  // Get current quarter percentage based on which quarter we're in
  const getCurrentQuarterPercentage = () => {
    switch (currentQuarter) {
      case 'q1':
        return 25; // We're in the beginning of Q1 (January)
      case 'q2':
        return 58; // Average of Q1 (100%) + Q2 start
      case 'q3':
        return 75; // Average of Q1-Q2 completed + Q3 progress
      case 'q4':
        return 88; // Most of the year completed
      default:
        return 25;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Soft 3D Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2F6FEC" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Soft 3D Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200/40 to-blue-400/40"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(2px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Soft 3D Depth Layers - Background Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(47,111,236,0.15) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(91,159,255,0.2) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(47,111,236,0.15) 0%, transparent 70%)',
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(11,60,138,0.12) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(47,111,236,0.18) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(11,60,138,0.12) 0%, transparent 70%)',
          ],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(91,159,255,0.08) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(47,111,236,0.12) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(91,159,255,0.08) 0%, transparent 70%)',
          ],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#2F6FEC] to-[#0B3C8A] bg-clip-text text-transparent mb-4 drop-shadow-sm">
          Malahi Group
        </h1>
        <p className="text-xl text-blue-600 font-medium">Strategic Growth Roadmap 2026</p>
      </motion.div>

      {/* Main Roadmap Container */}
      <div className="relative z-10 w-full max-w-[1400px] mb-12">
        {/* SVG DNA-like Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F6FEC" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#5B9FFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#2F6FEC" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B3C8A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2F6FEC" stopOpacity="1" />
              <stop offset="100%" stopColor="#0B3C8A" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* DNA-like crossing connections */}
          {/* Q1 to Center */}
          <motion.path
            d="M 22% 20% Q 30% 35%, 40% 50%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity: 1 }}
          />
          
          {/* Q1 to Q2 crossing */}
          <motion.path
            d="M 28% 20% Q 50% 30%, 72% 45%"
            fill="none"
            stroke="url(#lineGradient2)"
            strokeWidth="2.5"
            strokeDasharray="8,4"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ opacity: 0.7 }}
          />
          
          {/* Center to Q2 */}
          <motion.path
            d="M 60% 50% Q 70% 48%, 72% 50%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ opacity: 1 }}
          />
          
          {/* Q2 to Q3 crossing */}
          <motion.path
            d="M 72% 55% Q 50% 65%, 28% 75%"
            fill="none"
            stroke="url(#lineGradient2)"
            strokeWidth="2.5"
            strokeDasharray="8,4"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{ opacity: 0.7 }}
          />
          
          {/* Center to Q3 */}
          <motion.path
            d="M 40% 50% Q 30% 60%, 22% 75%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ opacity: 1 }}
          />
          
          {/* Q3 to Q4 crossing */}
          <motion.path
            d="M 28% 80% Q 50% 70%, 72% 55%"
            fill="none"
            stroke="url(#lineGradient2)"
            strokeWidth="2.5"
            strokeDasharray="8,4"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: 0.7 }}
          />
          
          {/* Center to Q4 */}
          <motion.path
            d="M 40% 50% Q 70% 52%, 72% 50%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{ opacity: 1 }}
          />
          
          {/* Q4 to Q1 crossing */}
          <motion.path
            d="M 72% 45% Q 50% 32%, 28% 25%"
            fill="none"
            stroke="url(#lineGradient2)"
            strokeWidth="2.5"
            strokeDasharray="8,4"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ opacity: 0.7 }}
          />

          {/* Additional connection points for DNA helix effect */}
          <motion.circle
            cx="50%"
            cy="30%"
            r="4"
            fill="#5B9FFF"
            filter="url(#glow)"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="50%"
            cy="70%"
            r="4"
            fill="#5B9FFF"
            filter="url(#glow)"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
          />
        </svg>

        {/* Circles Layout with More Space */}
        <div className="relative flex items-center justify-center gap-16" style={{ minHeight: '500px' }}>
          {/* Left Column - Q1 and Q3 */}
          <div className="flex flex-col justify-between gap-24">
            {/* Q1 - Top Left */}
            <QuarterCircle
              quarter="Q1"
              title="Foundation & Positioning"
              items={[
                'Brand Architecture Definition',
                'Unified Tracking & CRM Setup',
                'Group Awareness Campaign',
                'Digital Infrastructure Launch'
              ]}
              phase="Awareness"
              isSelected={selectedCircle === 'q1'}
              onClick={() => setSelectedCircle('q1')}
            />

            {/* Q3 - Bottom Left */}
            <QuarterCircle
              quarter="Q3"
              title="Retention & Lifetime Value"
              items={[
                'Group Loyalty Program',
                'CRM Automation',
                'Membership & Subscription Models',
                'Increase Repeat Rate & LTV'
              ]}
              phase="Retention"
              isSelected={selectedCircle === 'q3'}
              onClick={() => setSelectedCircle('q3')}
            />
          </div>

          {/* Center Circle */}
          <div className="flex items-center justify-center">
            <CenterCircle
              isSelected={selectedCircle === 'center'}
              onClick={() => setSelectedCircle('center')}
              percentage={getCurrentQuarterPercentage()}
            />
          </div>

          {/* Right Column - Q2 and Q4 */}
          <div className="flex flex-col justify-between gap-24">
            {/* Q2 - Top Right */}
            <QuarterCircle
              quarter="Q2"
              title="Revenue Engine Optimization"
              items={[
                'Conversion Optimization',
                'Cross-Brand Bundles',
                'Performance Campaign Scaling',
                'App Launch & Activation'
              ]}
              phase="Conversion"
              isSelected={selectedCircle === 'q2'}
              onClick={() => setSelectedCircle('q2')}
            />

            {/* Q4 - Bottom Right */}
            <QuarterCircle
              quarter="Q4"
              title="Expansion & Scale"
              items={[
                'Strategic Partnerships',
                'New Segments Entry',
                'Seasonal Revenue Maximization',
                'Expansion Plan for Year 2'
              ]}
              phase="Expansion"
              isSelected={selectedCircle === 'q4'}
              onClick={() => setSelectedCircle('q4')}
            />
          </div>
        </div>
      </div>

      {/* KPI Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-xl border-2 border-blue-400/40">
          <h3 className="text-gray-800 text-2xl font-bold mb-6 text-center drop-shadow-sm">Key Performance Indicators</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <KPIItem label="Group Revenue Growth" value="↑ YoY" />
            <KPIItem label="LTV / CAC Ratio" value="Target 3:1" />
            <KPIItem label="Repeat Rate" value="↑ 30%" />
            <KPIItem label="Average Order Value" value="↑ 25%" />
            <KPIItem label="Cross-Brand Purchase" value="Target 40%" />
            <KPIItem label="ROI Target" value="115%" />
          </div>
        </div>
      </motion.div>

      {/* Expanded Circle Modal */}
      <AnimatePresence>
        {selectedCircle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedCircle(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400, duration: 0.4 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedCircle === 'center' && <ExpandedCenter onClose={() => setSelectedCircle(null)} />}
              {selectedCircle === 'q1' && (
                <ExpandedQuarter
                  quarter="Q1"
                  title="Foundation & Positioning"
                  phase="Awareness"
                  onClose={() => setSelectedCircle(null)}
                />
              )}
              {selectedCircle === 'q2' && (
                <ExpandedQuarter
                  quarter="Q2"
                  title="Revenue Engine Optimization"
                  phase="Conversion"
                  onClose={() => setSelectedCircle(null)}
                />
              )}
              {selectedCircle === 'q3' && (
                <ExpandedQuarter
                  quarter="Q3"
                  title="Retention & Lifetime Value"
                  phase="Retention"
                  onClose={() => setSelectedCircle(null)}
                />
              )}
              {selectedCircle === 'q4' && (
                <ExpandedQuarter
                  quarter="Q4"
                  title="Expansion & Scale"
                  phase="Expansion"
                  onClose={() => setSelectedCircle(null)}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface CenterCircleProps {
  isSelected: boolean;
  onClick: () => void;
  percentage: number;
}

function CenterCircle({ isSelected, onClick, percentage }: CenterCircleProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      {/* Subtle background glow - always present */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2F6FEC] to-[#0B3C8A] rounded-full blur-2xl"
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.08, 1],
          x: [-10, 10, -10],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative w-96 h-96 rounded-full shadow-2xl flex flex-col items-center justify-center p-10 border-4 border-blue-400/40 backdrop-blur-md bg-white/80">
        {/* Loading Circle - SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 384 384">
          <circle
            cx="192"
            cy="192"
            r="188"
            stroke="rgba(47,111,236,0.15)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="192"
            cy="192"
            r="188"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: percentage / 100 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              strokeDasharray: "1 1",
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F6FEC" />
              <stop offset="50%" stopColor="#5B9FFF" />
              <stop offset="100%" stopColor="#2F6FEC" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Loading Percentage Text */}
        <div className="absolute -top-8 right-4 text-blue-600 font-bold text-lg drop-shadow-sm">
          {percentage}%
        </div>
        
        <h2 className="text-gray-800 text-3xl font-bold text-center mb-6 drop-shadow-sm">
          Malahi Group<br />Growth System
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2F6FEC] to-[#5B9FFF] mb-6 shadow-md"></div>
        <ul className="text-gray-700 text-base space-y-3 text-center font-medium">
          <li className="drop-shadow-sm text-left">Unified Digital Platform</li>
          <li className="drop-shadow-sm text-left">Multi-Brand Ecosystem</li>
          <li className="drop-shadow-sm text-left">Data-Driven Growth</li>
          <li className="drop-shadow-sm">CRM & Loyalty Infrastructure</li>
        </ul>
      </div>
    </motion.div>
  );
}

interface QuarterCircleProps {
  quarter: string;
  title: string;
  items: string[];
  phase: string;
  isSelected: boolean;
  onClick: () => void;
}

function QuarterCircle({ quarter, title, items, phase, isSelected, onClick }: QuarterCircleProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: parseFloat(quarter[1]) * 0.1 }}
    >
      {/* Subtle background glow - always present */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2F6FEC] to-[#0B3C8A] rounded-full blur-xl"
        animate={{
          opacity: [0.15, 0.28, 0.15],
          scale: [1, 1.1, 1],
          x: [-8, 8, -8],
          y: [8, -8, 8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: parseFloat(quarter[1]) * 0.5,
        }}
      />
      <div className="relative w-64 h-64 flex flex-col items-center justify-center p-6 backdrop-blur-md bg-white/70 border-2 border-blue-400/40 rounded-lg shadow-xl">
        
        <div className="text-blue-600 font-bold text-3xl mb-2 drop-shadow-sm">{quarter}</div>
        <h3 className="text-gray-800 text-lg font-bold text-center mb-3 leading-tight drop-shadow-sm">
          {title}
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-[#2F6FEC] to-[#5B9FFF] mb-3 shadow-md"></div>
        <ul className="text-gray-700 text-xs space-y-2 font-medium">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-blue-500 drop-shadow-sm">•</span>
              <span className="flex-1 leading-relaxed drop-shadow-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

interface ExpandedCenterProps {
  onClose: () => void;
}

function ExpandedCenter({ onClose }: ExpandedCenterProps) {
  const platformData = [
    { name: 'Digital Platform', value: 30, color: '#2F6FEC' },
    { name: 'Multi-Brand', value: 25, color: '#5B9FFF' },
    { name: 'Data-Driven', value: 25, color: '#0B3C8A' },
    { name: 'CRM & Loyalty', value: 20, color: '#1E56C9' },
  ];

  const investmentData = [
    { category: 'Platform', percentage: 30 },
    { category: 'Ecosystem', percentage: 25 },
    { category: 'Analytics', percentage: 25 },
    { category: 'CRM', percentage: 20 },
  ];

  return (
    <motion.div className="relative">
      {/* Subtle background glow - always present */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2F6FEC] to-[#0B3C8A] rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.08, 1],
          x: [-12, 12, -12],
          y: [-12, 12, -12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative w-[700px] h-[700px] flex flex-col items-center justify-center p-16 backdrop-blur-sm bg-white/5 border border-blue-300/30 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
        >
          <X size={32} />
        </button>

        <h2 className="text-white text-4xl font-bold text-center mb-8 drop-shadow-lg">
          Malahi Group Growth System
        </h2>
        <div className="w-32 h-1 bg-white/70 mx-auto mb-8 shadow-lg"></div>
        
        <div className="grid grid-cols-2 gap-8 w-full">
          {/* Pie Chart */}
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
            <h3 className="text-white text-xl font-bold mb-4 text-center">Investment Allocation</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0B3C8A', border: 'none', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
            <h3 className="text-white text-xl font-bold mb-4 text-center">Focus Areas (%)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={investmentData}>
                <XAxis dataKey="category" stroke="#fff" style={{ fontSize: '10px' }} />
                <YAxis stroke="#fff" style={{ fontSize: '10px' }} />
                <Tooltip contentStyle={{ backgroundColor: '#0B3C8A', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="percentage" fill="#5B9FFF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Key Metrics */}
          <div className="col-span-2 grid grid-cols-4 gap-4">
            <MetricCard label="Platform ROI" value="115%" />
            <MetricCard label="Integration" value="90%" />
            <MetricCard label="Automation" value="75%" />
            <MetricCard label="Growth Rate" value="↑ 45%" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ExpandedQuarterProps {
  quarter: string;
  title: string;
  phase: string;
  onClose: () => void;
}

function ExpandedQuarter({ quarter, title, phase, onClose }: ExpandedQuarterProps) {
  const getQuarterData = (q: string) => {
    switch (q) {
      case 'Q1':
        return {
          pieData: [
            { name: 'Brand Setup', value: 35, color: '#2F6FEC' },
            { name: 'CRM', value: 30, color: '#5B9FFF' },
            { name: 'Awareness', value: 20, color: '#0B3C8A' },
            { name: 'Infrastructure', value: 15, color: '#1E56C9' },
          ],
          barData: [
            { month: 'Jan', completion: 25 },
            { month: 'Feb', completion: 60 },
            { month: 'Mar', completion: 100 },
          ],
          metrics: [
            { label: 'Completion', value: '100%' },
            { label: 'Budget Used', value: '95%' },
            { label: 'ROI', value: '120%' },
            { label: 'Reach', value: '2.5M' },
          ],
        };
      case 'Q2':
        return {
          pieData: [
            { name: 'Conversion', value: 40, color: '#2F6FEC' },
            { name: 'Bundles', value: 25, color: '#5B9FFF' },
            { name: 'Campaigns', value: 20, color: '#0B3C8A' },
            { name: 'App Launch', value: 15, color: '#1E56C9' },
          ],
          barData: [
            { month: 'Apr', completion: 30 },
            { month: 'May', completion: 65 },
            { month: 'Jun', completion: 100 },
          ],
          metrics: [
            { label: 'Conv. Rate', value: '↑ 35%' },
            { label: 'Revenue', value: '↑ 45%' },
            { label: 'App Users', value: '50K' },
            { label: 'Bundle Sales', value: '↑ 60%' },
          ],
        };
      case 'Q3':
        return {
          pieData: [
            { name: 'Loyalty', value: 35, color: '#2F6FEC' },
            { name: 'Automation', value: 30, color: '#5B9FFF' },
            { name: 'Membership', value: 20, color: '#0B3C8A' },
            { name: 'LTV Growth', value: 15, color: '#1E56C9' },
          ],
          barData: [
            { month: 'Jul', completion: 35 },
            { month: 'Aug', completion: 70 },
            { month: 'Sep', completion: 100 },
          ],
          metrics: [
            { label: 'LTV', value: '↑ 40%' },
            { label: 'Repeat Rate', value: '30%' },
            { label: 'Members', value: '25K' },
            { label: 'Retention', value: '85%' },
          ],
        };
      case 'Q4':
        return {
          pieData: [
            { name: 'Partnerships', value: 30, color: '#2F6FEC' },
            { name: 'New Segments', value: 30, color: '#5B9FFF' },
            { name: 'Seasonal', value: 25, color: '#0B3C8A' },
            { name: 'Expansion', value: 15, color: '#1E56C9' },
          ],
          barData: [
            { month: 'Oct', completion: 40 },
            { month: 'Nov', completion: 75 },
            { month: 'Dec', completion: 100 },
          ],
          metrics: [
            { label: 'Partnerships', value: '12' },
            { label: 'New Markets', value: '3' },
            { label: 'Revenue', value: '↑ 55%' },
            { label: 'Growth', value: '↑ 70%' },
          ],
        };
      default:
        return {
          pieData: [],
          barData: [],
          metrics: [],
        };
    }
  };

  const data = getQuarterData(quarter);

  return (
    <motion.div className="relative">
      {/* Subtle background glow - always present */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2F6FEC] to-[#0B3C8A] rounded-full blur-3xl"
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.05, 1],
          x: [-15, 15, -15],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative w-[700px] h-[700px] flex flex-col items-center justify-center p-16 backdrop-blur-sm bg-white/5 border border-blue-300/30 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
        >
          <X size={32} />
        </button>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="text-white text-5xl font-bold drop-shadow-lg">{quarter}</div>
          <div className="bg-white/20 px-6 py-2 rounded-full border-2 border-white/40">
            <span className="text-white font-bold text-xl drop-shadow-md">{phase}</span>
          </div>
        </div>
        
        <h2 className="text-white text-3xl font-bold text-center mb-8 drop-shadow-lg">
          {title}
        </h2>
        <div className="w-32 h-1 bg-white/70 mx-auto mb-8 shadow-lg"></div>
        
        <div className="grid grid-cols-2 gap-8 w-full">
          {/* Pie Chart */}
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
            <h3 className="text-white text-xl font-bold mb-4 text-center">Focus Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data.pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0B3C8A', border: 'none', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
            <h3 className="text-white text-xl font-bold mb-4 text-center">Progress Timeline</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.barData}>
                <XAxis dataKey="month" stroke="#fff" style={{ fontSize: '12px' }} />
                <YAxis stroke="#fff" style={{ fontSize: '10px' }} />
                <Tooltip contentStyle={{ backgroundColor: '#0B3C8A', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="completion" fill="#5B9FFF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Key Metrics */}
          <div className="col-span-2 grid grid-cols-4 gap-4">
            {data.metrics.map((metric, index) => (
              <MetricCard key={index} label={metric.label} value={metric.value} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
}

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/30 text-center"
    >
      <div className="text-white/80 text-sm mb-1 font-medium">{label}</div>
      <div className="text-white text-2xl font-bold drop-shadow-md">{value}</div>
    </motion.div>
  );
}

interface KPIItemProps {
  label: string;
  value: string;
}

function KPIItem({ label, value }: KPIItemProps) {
  return (
    <motion.div
      className="text-center"
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <div className="text-gray-600 text-sm mb-1 font-medium">{label}</div>
      <div className="text-blue-600 text-xl font-bold drop-shadow-sm">{value}</div>
    </motion.div>
  );
}