(()=>{"use strict";function e(e,n,t,d){const a=document.createElement("div");a.classList.add("hero");const c=document.createElement("div");c.classList.add("hero-container");const i=document.createElement("h1");i.innerHTML=e;const l=document.createElement("h2");l.innerHTML=n;const o=document.createElement("span");o.classList.add("line-before-after"),o.innerHTML='<i class="fas fa-star"></i>';const s=document.createElement("p");s.innerHTML=t;const r=document.createElement("input");return r.type="button",r.value=d,c.appendChild(i),c.appendChild(l),c.appendChild(o),c.appendChild(s),c.appendChild(r),a.appendChild(c),a}function n(){const n=document.createElement("div");return n.id="homepage",n.classList.add("page"),n.appendChild(e("Welcome","The Grill House","Coming Soon","Explore")),n}function t(){const n=document.createElement("div");return n.id="about-page",n.classList.add("page"),n.appendChild(e("About Us","Since 1989","Family Owned","History")),n}function d(){const n=document.createElement("div");return n.id="menu-page",n.classList.add("page"),n.appendChild(e("Menu","World's Finest","BBQ","Menu")),n}const a=document.getElementById("content");function c(e){a.removeChild(a.lastChild),a.appendChild(e())}a.appendChild(function(){const e=document.createElement("header");return e.appendChild(function(e){const n=document.createElement("h2");n.innerHTML="Grill House",n.classList.add("title");const t=document.createElement("a");return t.href="#",t.id="title-link",t.appendChild(n),t}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("navigation"),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("ul");n.classList.add("page-navigation");const t=["Home","Menu","About"];for(const e of t){const t=document.createElement("li"),d=document.createElement("a");d.href="#",d.innerHTML=e,d.id=`${e.toLowerCase()}-link`,t.appendChild(d),n.appendChild(t)}return e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("social");const n=document.createElement("ul");n.classList.add("social-icons");const t=['<i class="fab fa-twitter-square"></i>','<i class="fab fa-facebook-square"></i>','<i class="fab fa-instagram"></i>'];for(const e of t){const t=document.createElement("li"),d=document.createElement("a");d.href="#",d.innerHTML=e,t.appendChild(d),n.appendChild(t)}return e.appendChild(n),e}()),e}()),e}()),a.appendChild(n()),document.getElementById("title-link").addEventListener("click",(()=>c(n))),document.getElementById("home-link").addEventListener("click",(()=>c(n))),document.getElementById("about-link").addEventListener("click",(()=>c(t))),document.getElementById("menu-link").addEventListener("click",(()=>c(d)))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE1QmdCTyxJQUd2QlIsRUFBV2pCLFlBNEJiLFdBQ0UsTUFBTTBCLEVBQVV2QyxTQUFTQyxjQUFjLE9BQ3ZDc0MsRUFBUXJDLFVBQVVDLElBQUksVUFFdEIsTUFBTTZCLEVBQUtoQyxTQUFTQyxjQUFjLE1BQ2xDK0IsRUFBRzlCLFVBQVVDLElBQUksZ0JBRWpCLE1BQU1xQyxFQUFRLENBQ1osd0NBQ0EseUNBQ0Esb0NBR0YsSUFBSyxNQUFNQyxLQUFRRCxFQUFPLENBQ3hCLE1BQU1MLEVBQUtuQyxTQUFTQyxjQUFjLE1BQzVCbUMsRUFBSXBDLFNBQVNDLGNBQWMsS0FDakNtQyxFQUFFUCxLQUFPLElBQ1RPLEVBQUU5QixVQUFZbUMsRUFFZE4sRUFBR3RCLFlBQVl1QixHQUNmSixFQUFHbkIsWUFBWXNCLEdBSWpCLE9BREFJLEVBQVExQixZQUFZbUIsR0FDYk8sRUFwRGdCQSxJQUVoQlQsRUE1QllBLElBRVpMLEVEQVdBLElBR3BCTixFQUFRTixZQUFZQyxLQUdGZCxTQUFTb0IsZUFBZSxjQUNoQ3NCLGlCQUFpQixTQUFTLElBQU1yQixFQUFXUCxLQUVwQ2QsU0FBU29CLGVBQWUsYUFDaENzQixpQkFBaUIsU0FBUyxJQUFNckIsRUFBV1AsS0FFbENkLFNBQVNvQixlQUFlLGNBQ2hDc0IsaUJBQWlCLFNBQVMsSUFBTXJCLEVBQVdKLEtBRXBDakIsU0FBU29CLGVBQWUsYUFDaENzQixpQkFBaUIsU0FBUyxJQUFNckIsRUFBV0gsTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3NjcmVlbnMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zY3JlZW5zL2Fib3V0L2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zY3JlZW5zL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oXG4gIHByaW1hcnlUZXh0LFxuICBzZWNvbmRhcnlUZXh0LFxuICB0ZXJ0aWFyeVRleHQsXG4gIGJ1dHRvblRleHRcbikge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcblxuICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVyby1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLmlubmVySFRNTCA9IHByaW1hcnlUZXh0O1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi5pbm5lckhUTUwgPSBzZWNvbmRhcnlUZXh0O1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibGluZS1iZWZvcmUtYWZ0ZXJcIik7XG4gIHNwYW4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+JztcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuaW5uZXJIVE1MID0gdGVydGlhcnlUZXh0O1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJidXR0b25cIjtcbiAgaW5wdXQudmFsdWUgPSBidXR0b25UZXh0O1xuXG4gIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcbiAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlcm87XG59XG4iLCJpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IGhlcm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVyb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVwYWdlLmlkID0gXCJob21lcGFnZVwiO1xuICBob21lcGFnZS5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAvLyBIZXJvIFNlY3Rpb25cbiAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoXG4gICAgaGVybyhcIldlbGNvbWVcIiwgXCJUaGUgR3JpbGwgSG91c2VcIiwgXCJDb21pbmcgU29vblwiLCBcIkV4cGxvcmVcIilcbiAgKTtcblxuICByZXR1cm4gaG9tZXBhZ2U7XG59XG4iLCJpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IGhlcm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVyb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5pZCA9IFwiYWJvdXQtcGFnZVwiO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAvLyBIZXJvIFNlY3Rpb25cbiAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVybyhcIkFib3V0IFVzXCIsIFwiU2luY2UgMTk4OVwiLCBcIkZhbWlseSBPd25lZFwiLCBcIkhpc3RvcnlcIikpO1xuXG4gIHJldHVybiBhYm91dDtcbn1cbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgaGVybyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZXJvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmlkID0gXCJtZW51LXBhZ2VcIjtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAvLyBIZXJvIFNlY3Rpb25cbiAgbWVudS5hcHBlbmRDaGlsZChoZXJvKFwiTWVudVwiLCBcIldvcmxkJ3MgRmluZXN0XCIsIFwiQkJRXCIsIFwiTWVudVwiKSk7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG4iLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9zY3JlZW5zL2hvbWUvaG9tZVwiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL3NjcmVlbnMvYWJvdXQvYWJvdXRcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL3NjcmVlbnMvbWVudS9tZW51XCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbi8vIENyZWF0ZSBjb250ZW50IGNvbnRhaW5lclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gQWRkIGhlYWRlclxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5cbi8vIFJlbmRlciBob21lcGFnZSBieSBkZWZhdWx0XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XG5cbi8vIEFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gTmF2aWdhdGlvbiBMaW5rc1xuY29uc3QgdGl0bGVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1saW5rXCIpO1xudGl0bGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB1cGRhdGVQYWdlKGhvbWUpKTtcblxuY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtbGlua1wiKTtcbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB1cGRhdGVQYWdlKGhvbWUpKTtcblxuY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1saW5rXCIpO1xuYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB1cGRhdGVQYWdlKGFib3V0KSk7XG5cbmNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWxpbmtcIik7XG5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdXBkYXRlUGFnZShtZW51KSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UobmV3UGFnZSkge1xuICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdQYWdlKCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIC8vdGl0bGVMaW5rXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUxpbmsoXCJHcmlsbCBIb3VzZVwiKSk7XG5cbiAgLy8gbmF2aWdhdGlvblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiB0aXRsZUxpbmsocGFnZVRpdGxlKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5pbm5lckhUTUwgPSBwYWdlVGl0bGU7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICBjb25zdCB0aXRsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgdGl0bGVMaW5rLmhyZWYgPSBcIiNcIjtcbiAgdGl0bGVMaW5rLmlkID0gXCJ0aXRsZS1saW5rXCI7XG4gIHRpdGxlTGluay5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgcmV0dXJuIHRpdGxlTGluaztcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XG5cbiAgLy8gcGFnZSBuYXZpYXRpb25cbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChwYWdlTmF2aWdhdGlvbigpKTtcblxuICAvLyBzb2NpYWxzXG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoc29jaWFscygpKTtcblxuICByZXR1cm4gbmF2aWdhdGlvbjtcbn1cblxuZnVuY3Rpb24gcGFnZU5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJwYWdlLW5hdmlnYXRpb25cIik7XG5cbiAgY29uc3QgcGFnZXMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkFib3V0XCJdO1xuICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gXCIjXCI7XG4gICAgYS5pbm5lckhUTUwgPSBwYWdlO1xuICAgIGEuaWQgPSBgJHtwYWdlLnRvTG93ZXJDYXNlKCl9LWxpbmtgO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG5cbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBzb2NpYWxzKCkge1xuICBjb25zdCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc29jaWFscy5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB1bC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25zXCIpO1xuXG4gIGNvbnN0IGljb25zID0gW1xuICAgICc8aSBjbGFzcz1cImZhYiBmYS10d2l0dGVyLXNxdWFyZVwiPjwvaT4nLFxuICAgICc8aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmVcIj48L2k+JyxcbiAgICAnPGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPicsXG4gIF07XG5cbiAgZm9yIChjb25zdCBpY29uIG9mIGljb25zKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IFwiI1wiO1xuICAgIGEuaW5uZXJIVE1MID0gaWNvbjtcblxuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQodWwpO1xuICByZXR1cm4gc29jaWFscztcbn1cbiJdLCJuYW1lcyI6WyJoZXJvIiwicHJpbWFyeVRleHQiLCJzZWNvbmRhcnlUZXh0IiwidGVydGlhcnlUZXh0IiwiYnV0dG9uVGV4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhlcm9Db250YWluZXIiLCJoMSIsImlubmVySFRNTCIsImgyIiwic3BhbiIsInAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIiwiaG9tZSIsImhvbWVwYWdlIiwiaWQiLCJhYm91dCIsIm1lbnUiLCJjb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGVQYWdlIiwibmV3UGFnZSIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiaGVhZGVyIiwicGFnZVRpdGxlIiwidGl0bGUiLCJ0aXRsZUxpbmsiLCJocmVmIiwibmF2aWdhdGlvbiIsIm5hdiIsInVsIiwicGFnZXMiLCJwYWdlIiwibGkiLCJhIiwidG9Mb3dlckNhc2UiLCJwYWdlTmF2aWdhdGlvbiIsInNvY2lhbHMiLCJpY29ucyIsImljb24iLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==