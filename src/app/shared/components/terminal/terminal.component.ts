import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  template: `
    <div class="terminal-window">
      <!-- Terminal Header -->
      <div class="terminal-header">
        <div class="terminal-controls">
          <div class="control-btn close"></div>
          <div class="control-btn minimize"></div>
          <div class="control-btn maximize"></div>
        </div>
        <div class="terminal-title">
          <span class="file-path">~/portfolio/developer.ts</span>
        </div>
      </div>

      <!-- Terminal Content -->
      <div class="terminal-content">
        <div class="code-line">
          <span class="keyword">const </span>
          <span class="variable">developer </span>
          <span class="operator">= </span>
          <span class="keyword">new </span>
          <span class="class-name">SoftwareEngineer </span>
          <span class="operator">(</span>
          <span class="string terminal-cursor">{{ displayText }}</span>
          <span class="operator">);</span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './terminal.component.css',
})
export class TerminalComponent implements OnInit {
  displayText = '"Alejandro Rentheria"';

  ngOnInit() {
    this.startTypingAnimation();
  }

  private startTypingAnimation() {
    const fullText = '"Alejandro Rentheria"';
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        this.displayText = fullText.substring(0, currentIndex);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
  }
}
